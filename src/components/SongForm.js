import React from "react";
import "../App.css";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      title: " ",
      artist: " ",
      genre: " ",
      rating: "  ",
    };
    // Binding event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Event handler to track changes in input
  handleChange = (event) => {
    console.log("new value", event.target.value);
    this.setState({
      //to change the 'name' to the given value
      [event.target.name]: event.target.value,
    });
  };
  //to submit the form and add the song to the list
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", this.state);
    const newSong = {
      key: this.state.key,
      title: this.state.title,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating,
    };

    console.log("newSong", newSong);
    this.props.addNewSong(newSong);
    this.setState({ songs: "" });
  };

  render() {
    return (
      <div>
        <form className="input-form">
          <div>
            <label>Track</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Artist</label>
            <input
              name="artist"
              type="text"
              value={this.state.artist}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Genre</label>
            <select
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option value="">Select genre</option>
              <option value="Techno">Techno</option>
              <option value="Progressive">Progressive</option>
              <option value="IDM">IDM</option>
              <option value="Minimal">Minimal</option>
              <option value="Acid">Acid</option>
            </select>
          </div>
          <div>
            <label>Rating</label>
            <select
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            >
              <option value="">Rating</option>
              <option value="5 stars">5 stars</option>
              <option value="4 stars">4 stars</option>
              <option value="3 stars">3 stars</option>
              <option value="2 stars">2 stars</option>
              <option value="1 star">1 star</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Add track to playlist
          </button>
        </form>
      </div>
    );
  }
}

export default SongForm;
