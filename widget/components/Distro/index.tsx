/*
This file is for the Distro Icon module.
*/

import { getIcon } from "../../lib/constants/icons";
import { exec } from "astal/process";

var distro = exec("bash -c 'grep '^ID=' /etc/os-release | cut -d= -f2'")
  .trim()
  .replace(/"/g, "");

// might remove this later, bad catching
if (!distro) {
  distro = "arch";
}

export default function Distro() {
  return <button className="distro-module">{getIcon(distro)}</button>;
}
