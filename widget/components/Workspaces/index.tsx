/*
This file returns the workspaces module for Hyprland.
*/
import Hyprland from "gi://AstalHyprland";
import { bind } from "astal";

function InactiveWorkspace(props: { id: number }) {
  return (
    <button className="inactive-workspace">
      <label label={props.id.toString()} />
    </button>
  );
}

function ActiveWorkspace(props: { id: number }) {
  return (
    <button className="active-workspace">
      <label label={props.id.toString()} />
    </button>
  );
}

const hyprland = Hyprland.get_default();

export default function Workspaces() {
  return (
    <box className="workspaces">
      {bind(hyprland, "workspaces").as((workspaces) => {
        //sort workspaces
        workspaces.sort((a, b) => a.get_id() - b.get_id());
        return (
          <box>
            {workspaces.map((workspaces) => {
              return bind(hyprland, "focused_workspace").as(
                (focused_workspace) => {
                  if (focused_workspace.get_id() === workspaces.get_id()) {
                    return (
                      <button
                        onClick={() => {
                          focused_workspace.focus();
                        }}
                        className="active-workspace-button"
                      >
                        <ActiveWorkspace id={focused_workspace.get_id()} />
                      </button>
                    );
                  }
                  return (
                    <button
                      onClick={() => {
                        workspaces.focus();
                      }}
                      className="inactive-workspace-button"
                    >
                      <InactiveWorkspace id={workspaces.get_id()} />
                    </button>
                  );
                },
              );
            })}
          </box>
        );
      })}
    </box>
  );
}
