import Apps from "gi://AstalApps";
import { bind } from "astal";
import Mpris from "gi://AstalMpris";

const spotify = Mpris.Player.new("spotify");

if (spotify.available) print(spotify.title);

const apps = new Apps.Apps({
  nameMultiplier: 2,
  entryMultiplier: 0,
  executableMultiplier: 2,
});

for (const app of apps.fuzzy_query("spotify")) {
  print(app.name);
}

export default function MediaComponent() {
  return (
    <box>
      <button onClick={() => spotify.play_pause()}>
        <box>
          {bind(spotify, "artist").as((artist) => {
            return artist;
          })}
          -
          {bind(spotify, "title").as((title) => {
            return title;
          })}
        </box>
      </button>
    </box>
  );
}
