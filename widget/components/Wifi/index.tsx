import { Gtk } from "astal/gtk3";
import { Variable } from "astal";
import Network from "gi://AstalNetwork";

const network = Network.get_default();

export default function Wifi() {
  return (
    <button onClick={() => print("hello")} halign={Gtk.Align.CENTER}>
      <label label={network.wifi.ssid} />
    </button>
  );
}
