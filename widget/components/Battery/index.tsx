import Battery from "gi://AstalBattery";
import { Gtk } from "astal/gtk3";
import { bind } from "astal";

const battery = Battery.get_default();
print(battery["percentage"]);
print(battery);

export default function BatteryComponent() {
  return (
    <button onClick={() => print("hello")} halign={Gtk.Align.CENTER}>
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
    </button>
  );
}
