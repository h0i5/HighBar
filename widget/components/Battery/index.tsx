/*
This file returns the battery module.
Todo: States for battery and notification dispatching.
*/

import Battery from "gi://AstalBattery";
import { Gtk } from "astal/gtk3";
import { bind } from "astal";

const battery = Battery.get_default();

export default function BatteryComponent() {
  return (
    <button halign={Gtk.Align.CENTER}>
      <box>
        <icon valign={Gtk.Align.CENTER} icon="battery-symbolic" vexpand />{" "}
        <label
          label={
            bind(battery, "percentage").as(
              (p: number) => `${Math.floor(p * 100)} %`,
            )
              ? bind(battery, "percentage").as(
                  (p: number) => `${Math.floor(p * 100)}%`,
                )
              : "Err!"
          }
        />
      </box>
    </button>
  );
}
