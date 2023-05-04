import React, { Component } from "react";
import { Howl, Howler } from "howler";
import CustomButton from "./CustomButton";

class MusicPlayer extends Component {
  constructor(props) {
    console.log("init");
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.sound = new Howl({
      src: ["/8DMusic.mp3"],
      loop: true,
    });
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    console.log("hello");
    const isPlaying = !this.state.isPlaying;

    if (isPlaying) {
      this.sound.play();
    } else {
      this.sound.pause();
    }

    this.setState({ isPlaying });
  }

  render() {
    return (
      <div className="music-btn">
        <div onClick={this.togglePlay}>
          {this.state.isPlaying ? "Pause" : "Play"}
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
