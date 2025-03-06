/*
This file returns the Wifi module.

Todo: add ethernet support.
*/
import { Gtk } from "astal/gtk3";
import Network from "gi://AstalNetwork";
import { bind } from "astal";

const network = Network.get_default();

export default function Wifi() {
  return (
    <button halign={Gtk.Align.CENTER}>
      <box>
        {bind(network, "wifi").as((wifi) => {
          return (
            <box>
              <icon
                valign={Gtk.Align.CENTER}
                icon="network-wireless-signal-excellent-symbolic"
                vexpand
              />{" "}
              <label label={wifi.ssid} />
            </box>
          );
        })}
      </box>
    </button>
  );
}
