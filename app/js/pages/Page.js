import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
        icon: 'day-thunderstorm',
        title: 'fucking shitstorm',
      },
      ticker: {
        title: 'alternative facts',
        value: '+50',
        style: 'green',
      },
      taxReturns: {
        released: true,
      },
    };
  }

  componentDidMount() {
    fetch('/api/header')
    .then(res => res.json())
    .then(res => this.setState(res));
  }

  renderSecondary() {
    return (
      <div>
        <p>{new Date().toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</p>
        <p><i className={`wi wi-${this.state.weather.icon}`}></i>{this.state.weather.title}</p>
        <p>{this.state.ticker.title} <span className={`-${this.state.ticker.style}`}>{`${this.state.ticker.value}%`}</span></p>
        <p>Has Trump released his tax returns? <span className={this.state.taxReturns.released ? "-green" : "-red"}>{this.state.taxReturns.released ? 'yes' : 'no'}</span></p>
      </div>
    );
  }

  render() {
    const isHome = this.props.location.pathname === '/';

    return (
      <div>
        <header className="wrapper">
          <h1>scandalous as fuck</h1>
          {isHome ? this.renderSecondary() : null}
        </header>
        {this.props.children}
        <footer className="wrapper">
          <p>&copy; 2017 Scandalous as Fuck. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

module.exports = Page;
