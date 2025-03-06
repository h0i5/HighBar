/*
This file returns the Volume module.
*/

import { Gtk } from "astal/gtk3";
import { exec } from "astal/process";
import { bind, Variable } from "astal";

// Function to get the current volume
function getVolume() {
  try {
    const output = exec("pactl get-sink-volume @DEFAULT_SINK@").trim();
    const match = output.match(/(\d+)%/);
    return match ? parseInt(match[1]) : 0;
  } catch {
    return 0;
  }
}

// Bind volume variable
const volume = Variable(getVolume());

// Function to set volume
function setVolume(change) {
  exec(`pactl set-sink-volume @DEFAULT_SINK@ ${change}%`);
  volume.set(getVolume()); // Update the variable
}

export default function VolumeComponent() {
  return (
    <button
      halign={Gtk.Align.CENTER}
      onScroll={(event) => {
        if (event.delta_y < 0) setVolume("+1"); // Scroll up -> Increase volume
        if (event.delta_y > 0) setVolume("-1"); // Scroll down -> Decrease volume
      }}
    >
      <box>
        <icon
          valign={Gtk.Align.CENTER}
          icon="audio-speakers-symbolic"
          vexpand
        />
        <label label={bind(volume).as((v) => `${v}%`)} />
      </box>
    </button>
  );
}
