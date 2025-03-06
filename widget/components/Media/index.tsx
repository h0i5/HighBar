/*
This file contains the Media Module,
Currently supports:
    Spotify
*/

import { bind } from "astal";
import Mpris from "gi://AstalMpris";

const spotify = Mpris.Player.new("spotify");

//print(spotify.get_position());
//print(spotify.get_length());

function trimTitle(title: string) {
  if (title.length > 20) {
    return title.slice(0, 20) + "...";
  } else {
    return title;
  }
}

export default function MediaComponent() {
  return (
    <box className="media-module">
      <button onClick={() => spotify.play_pause()}>
        <box>
          <box>󰓇</box>
          {bind(spotify, "artist").as((artist) => {
            if (artist) return trimTitle(artist);
            else return "";
          })}{" "}
          -{" "}
          {bind(spotify, "title").as((title) => {
            if (title) return trimTitle(title);
            else return "";
          })}
        </box>
      </button>
    </box>
  );
}
