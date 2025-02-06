import { App, Astal, Gtk, Gdk } from "astal/gtk3";

import Time from "./components/Time";
import MediaComponent from "./components/Media";
import Workspaces from "./components/Workspaces";
import BatteryComponent from "./components/Battery";
import Wifi from "./components/Wifi";

export default function Bar(gdkmonitor: Gdk.Monitor) {
  return (
    <window
      className="Bar"
      name="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.RIGHT
      }
      application={App}
    >
      <centerbox>
        <box halign={Gtk.Align.START}>
          <button onClicked="echo hello" halign={Gtk.Align.START}>
            A
          </button>

          <Workspaces />
        </box>
        <box halign={Gtk.Align.CENTER}>
          <MediaComponent />
        </box>
        <box halign={Gtk.Align.END}>
          <BatteryComponent />
          <Wifi />
          <Time />
        </box>
      </centerbox>
    </window>
  );
}
