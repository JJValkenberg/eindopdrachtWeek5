import React from "react";
import "../App.css";

function SongListItem(props) {
  console.log("songlistitem", props.song);
  return (
    <li key={props.song.id} className="list-li">
      <span className="item">TITLE: {props.song.title}</span>
      <span className="item">ARTIST: {props.song.artist}</span>
      <span className="item">GENRE: {props.song.genre}</span>
      <span className="item">RATING: {props.song.rating}</span>
      <button onClick={props.deleteSong}>Delete</button>
      <button>sort on artist</button>
    </li>
  );
}

export default SongListItem;
