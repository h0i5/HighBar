/*
This file contains all the services provided by Astal which are used in highbar.
*/

import Hyprland from "gi://AstalHyprland";
export const hyprlandService = Hyprland.get_default();

import AstalMpris from "gi://AstalMpris?version=0.1";
export const mprisService = AstalMpris.get_default();

import AstalWp from "gi://AstalWp?version=0.1";
const wireplumber = AstalWp.get_default() as AstalWp.Wp;
export const audioService = wireplumber.audio;

import AstalNetwork from "gi://AstalNetwork?version=0.1";
export const networkService = AstalNetwork.get_default();

import AstalBluetooth from "gi://AstalBluetooth?version=0.1";
export const bluetoothService = AstalBluetooth.get_default();

import AstalBattery from "gi://AstalBattery?version=0.1";
export const batteryService = AstalBattery.get_default();
