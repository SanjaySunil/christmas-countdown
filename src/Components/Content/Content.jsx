/**
 * @file Content.jsx
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React, { Component } from "react"

class Content extends Component {
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return (
            <div className="container">
                <div className="centered">
                    <span id="title"></span><br />
                    <span id="daycount"></span><br />
                    <button id="music-button" onClick={this.playAudio}>
                        <span>Play Music</span>
                    </button>
                    <audio className="audio-element">
                        <source src="https://assets.sanjaysunil.me/xmas-countdown/thatAmazingChristmasMusic.mp3"></source>
                    </audio>
                </div>
            </div>
        )
    }
}

export default Content;
