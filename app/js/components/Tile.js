import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      content: '',
      photo: '',
    };
  }

  componentDidMount() {
    this.setState({
      title: "Trump reveals the United States Air Force captured a UFO in the 1970's",
      author: "By JOE KENT",
      content: "Late on the President Trump's second day in office he conducted a live broadcast to the nation exposing classified material on Area 51. In the documents, there is evidence of the United States Air Force capturing a UFO in June of 1970 and experimenting on it at an unnamed underground base.",
      photo: 'http://i.imgur.com/A59WiPy.png',
    });
  }

  render() {
    const photo = this.props.display.photo ?
      <div className="photo" style={{ backgroundImage: `url(${this.state.photo})` }}></div> : null;

    return (
      <a className="container__padding article-tile">
        <p className="title">{this.state.title}</p>
        <p className="author">{this.state.author}</p>
        {photo}
        <p className="content">{this.props.display.summary ? this.state.content : ''}</p>
      </a>
    );
  }
}

Tile.defaultProps = {
  contentId: null,
  display: {
    summary: true,
    photo: true,
  },
};

module.exports = Tile;
