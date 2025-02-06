/*
This file returns the Volume module.
*/

import { Gtk } from "astal/gtk3";
import Wp from "gi://AstalWp";

const audio = Wp.get_default().audio;

print(audio.default_speaker.volume);

export default function VolumeComponent() {
  print(audio.default_speaker.volume);
  return (
    <button halign={Gtk.Align.CENTER}>
      <box>
        <icon
          valign={Gtk.Align.CENTER}
          icon="audio-speakers-symbolic"
          vexpand
        />{" "}
        <label label={audio.default_speaker.volume.toString()} />
      </box>
    </button>
  );
}
