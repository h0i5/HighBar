/*
This file contains Icons for distros and applications.
*/

export const distroIcons = [
  ["deepin", ""],
  ["fedora", ""],
  ["arch", ""],
  ["nixos", ""],
  ["debian", ""],
  ["opensuse-tumbleweed", ""],
  ["ubuntu", ""],
  ["endeavouros", ""],
  ["manjaro", ""],
  ["pop", ""],
  ["garuda", ""],
  ["zorin", ""],
  ["mxlinux", ""],
  ["arcolinux", ""],
  ["gentoo", ""],
  ["artix", ""],
  ["centos", ""],
  ["hyperbola", ""],
  ["kubuntu", ""],
  ["mandriva", ""],
  ["xerolinux", ""],
  ["parabola", ""],
  ["void", ""],
  ["linuxmint", ""],
  ["archlabs", ""],
  ["devuan", ""],
  ["freebsd", ""],
  ["openbsd", ""],
  ["slackware", ""],
];
export function getIcon(distro: string) {
  for (const icon of distroIcons) {
    if (icon[0] == distro) {
      return icon[1];
    }
  }
}

export const defaultApplicationIcons: Record<string, string> = {
  discord: "󰙯",
  thunderbird: "",
  wezterm: "",
  "draw.io": "󰇟",
  "firefox-developer-edition": "",
  "google-chrome": "",
  "title:YouTube ": "",
  spotify: "󰓇",
  spicetify: "󰓇",
  chromium: "",
  code: "󰨞",
  dbeaver: "",
  edge: "󰇩",
  evince: "",
  firefox: "",
  "zen-browser": "",
  "zen-beta": "",
  foot: "",
  keepassxc: "",
  keymapp: "",
  kitty: "",
  obsidian: "󰠮",
  password: "",
  qBittorrent: "",
  rofi: "",
  slack: "",
  spotube: "󰓇",
  steam: "",
  telegram: "",
  vlc: "󰕼",
};

export const getApplicationIcon = (appName: string): string => {
  return defaultApplicationIcons[appName.toLowerCase()] || "󰀏";
};
