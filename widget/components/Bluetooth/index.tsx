/*
This file returns the Bluetooth module.
*/

import Bluetooth from "gi://AstalBluetooth";
import { Gtk } from "astal/gtk3";
import { bind } from "astal";
import { exec } from "astal/process";

const bluetooth = Bluetooth.get_default();

for (const device of bluetooth.get_devices()) {
  print(device.name);
}

function trimTitle(title: string) {
  if (title.length > 20) {
    return title.slice(0, 20) + "...";
  } else {
    return title;
  }
}

export default function BluetoothComponent() {
  if (bluetooth.get_devices()) {
    return (
      <button
        onClicked={() => {
          exec("blueman-manager");
        }}
        halign={Gtk.Align.CENTER}
      >
        <box>
          <icon valign={Gtk.Align.CENTER} icon="bluetooth-symbolic" vexpand />{" "}
          {bind(bluetooth, "devices").as((devices) => {
            return <label label={trimTitle(devices[0].name)} />;
          })}
        </box>
      </button>
    );
  } else {
    return <box />;
  }
}
