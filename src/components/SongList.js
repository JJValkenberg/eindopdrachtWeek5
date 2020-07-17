import React from "react";
import SongListItem from "./SongListItem";
import "../App.css";

function SongList(props) {
  console.log("SongList", props.id);
  const songsForList = props.songs.map((song) => (
    <SongListItem key={song.id} song={song} deleteSong={props.deleteSong} />
  ));
  return (
    <div className="ul-list">
      <ul>{songsForList}</ul>
    </div>
  );
}

export default SongList;
