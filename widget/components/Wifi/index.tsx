/*
This file returns the Wifi module.

Todo: add ethernet support.
*/
import { Gtk } from "astal/gtk3";
import Network from "gi://AstalNetwork";

const network = Network.get_default();

export default function Wifi() {
  return (
    <button halign={Gtk.Align.CENTER}>
      <box>
        <icon
          valign={Gtk.Align.CENTER}
          icon="network-wireless-signal-excellent-symbolic"
          vexpand
        />{" "}
        <label label={network.wifi.ssid} />
      </box>
    </button>
  );
}
