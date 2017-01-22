import React, { Component } from 'react';
import Tile from '../components/Tile';

const about = "Scandalous As Fuck is here to provide our great nation with the fake news coverage our Tweeter in Chief deserves.";
const action = "We know shitty jokes can't save the country from a tyrant hellbent on lying to the American people and putting the most right wing billionares at the top of government. If you're looking for ways to resist, checkout these guides put together by people smarter than us.";

class Home extends Component {
  render() {
    return (
      <section className="wrapper">
        <div className="container">
          <Tile display={{summary: false, photo: true}} />
        </div>
        <div className="container -third">
          <Tile display={{summary: true, photo: false}} />
          <Tile display={{summary: true, photo: false}} />
          <Tile display={{summary: true, photo: false}} />
          <Tile display={{summary: true, photo: false}} />
        </div>
        <div className="container -two_third">
          <Tile display={{summary: true, photo: true}} />

          <div className="container -half">
            <Tile display={{summary: true, photo: true}} />
          </div>
          <div className="container -half -gray">
            <p>{about}</p>
            <p>Fucking Editor in Chief <a href="https://twitter.com/itsjoekent">Joe Kent</a></p>
            <a className="button -white" href="mailto:sue@joekent.me"><p>Sue Scandalous as Fuck</p></a>
            <h3>Submit an elitist think piece</h3>
            <p>Please type your coastal liberal trash in no less than 500 words.</p>
            <p>With that, please submit your first & last name, state and whether you follow POTUS on Twitter.</p>
            <a className="button -white" href="mailto:hey@joekent.me"><p>Write the Editor</p></a>
            <h3>Take Action</h3>
            <p>{action}</p>
            <a className="button -white" target="_blank" href="https://www.indivisibleguide.com"><p>Indivisible</p></a>
            <a className="button -white" target="_blank" href="https://www.resistancemanual.org"><p>Resistance Manual</p></a>
          </div>
        </div>
      </section>
    );
  }
}

// <p>{about}</p>

module.exports = Home;
