import { Gtk } from "astal/gtk3";
import { Variable } from "astal";
const time = Variable("").poll(1000, "date '+%H:%M'");
export default function Time() {
  return (
    <button className={"input-mouse"} halign={Gtk.Align.CENTER}>
      <label label={time()} />
    </button>
  );
}
