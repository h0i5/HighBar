/*
This file returns the module which shows the currently focused client.
*/

import { bind } from "astal";

import Hyprland from "gi://AstalHyprland";
const hyprland = Hyprland.get_default();
import { getApplicationIcon } from "../../lib/constants/icons";

function trimClientTitle(title: string) {
  if (title.length > 20) {
    return title.slice(0, 20) + "...";
  } else {
    return title;
  }
}

export default function ActiveWindow() {
  return (
    <box>
      {bind(hyprland, "focused_client").as((client) => {
        if (client) {
          if (client.class) {
            return (
              <box>
                <button className="active-client">
                  {`${getApplicationIcon(client.class.toLowerCase())} ${""} ${trimClientTitle(client.class)}`}
                </button>
              </box>
            );
          }
        } else {
          return <box />;
        }
      })}
    </box>
  );
}
