/*
This file returns the module which shows the currently focused client.
*/

import { bind } from "astal";

import Hyprland from "gi://AstalHyprland";
const hyprland = Hyprland.get_default();

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
        return (
          <box>
            <button className="active-client">
              {trimClientTitle(client.title)}
            </button>
          </box>
        );
      })}
    </box>
  );
}
