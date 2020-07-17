import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import "../App.css";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Xpander",
          artist: "Sasha",
          genre: "Progressive",
          rating: "5 stars",
        },
        {
          id: 2,
          title: "The Bells",
          artist: "Jeff Mills",
          genre: "Techno",
          rating: "5 stars",
        },
        {
          id: 3,
          title: "Acid Tracks",
          artist: "Phuture",
          genre: "Acid",
          rating: "3 stars",
        },
      ],
    };
    this.addNewSong = this.addNewSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  deleteSong = (index) => {
    const songs = Object.assign([], this.state.songs);
    songs.splice(index, 1);
    this.setState({ songs: songs });
  };

  addNewSong = (song) => {
    this.setState((prevState) => {
      return {
        songs: [...prevState.songs, song],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Add your favorite tracks</h1>
        <SongForm addNewSong={this.addNewSong} />
        <h1>Playlist</h1>
        <SongList
          songs={this.state.songs}
          deleteSong={this.deleteSong}
          className="header"
        />
      </div>
    );
  }
}

export default SongOverview;
