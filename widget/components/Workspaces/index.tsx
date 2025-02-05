import Hyprland from "gi://AstalHyprland";
import { bind } from "astal";
import { Variable } from "astal";

function InactiveWorkspace() {
  return (
    <button>
      <label label="IN" />
    </button>
  );
}

function ActiveWorkspace() {
  return (
    <button>
      <label label="A" />
    </button>
  );
}

const hyprland = Hyprland.get_default();

for (const client of hyprland.get_clients()) {
  print(client.title);
}

for (const client of hyprland.get_clients()) {
  print(client.title);
}

export default function Workspaces() {
  return bind(hyprland, "workspaces").as((workspaces) => {
    //sort workspaces
    workspaces.sort((a, b) => a.get_id() - b.get_id());
    return (
      <box>
        {workspaces.map((workspaces) => {
          return bind(hyprland, "focused_workspace").as((focused_workspace) => {
            if (focused_workspace.get_id() === workspaces.get_id()) {
              return (
                <button
                  onClick={() => {
                    focused_workspace.focus();
                  }}
                >
                  <ActiveWorkspace />
                </button>
              );
            }
            return (
              <button
                onClick={() => {
                  workspaces.focus();
                }}
              >
                <InactiveWorkspace />
              </button>
            );
          });
        })}
      </box>
    );
  });
}
