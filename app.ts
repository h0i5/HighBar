import style from "./style.scss";
import Bar from "./widget/Bar";
import MediaComponent from "./widget/components/Media/Popup";
import MprisPlayers from "./widget/components/Media/Popup";
import { App, Widget } from "astal/gtk3";

App.start({
  instanceName: "highbar",
  css: style,
  main() {
    App.get_monitors().map(Bar);
    //new Widget.Window({}, MprisPlayers());
  },
});
