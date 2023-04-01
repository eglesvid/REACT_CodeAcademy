import React from "react";
import styles from "./SongList.module.css";
import Song from "../Song/Song";

export default function SongList() {
  const songs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "5:55",
    },
    {
      id: 2,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      duration: "8:02",
    },
    {
      id: 3,
      title: "Hotel California",
      artist: "Eagles",
      duration: "6:31",
    },
    {
      id: 4,
      title: "Like a Rolling Stone",
      artist: "Bob Dylan",
      duration: "6:13",
    },
    {
      id: 5,
      title: "A Change Is Gonna Come",
      artist: "Sam Cooke",
      duration: "3:14",
    },
  ];
  return (
    <div className={styles["songlist-container"]}>
      {songs.map((song) => {
        return (
          <Song key={song.id} title={song.title} artist={song.artist} duration={song.duration} />
        );
      })}
    </div>
  );
}
