import { gettext as getText } from "i18n";
import {DEVICE_HEIGHT, DEVICE_WIDTH} from "./device";

import {Colors} from "./constants";

export const TITLE_TEXT = {
  x: (DEVICE_WIDTH - px(288)) / 2,
  y: px(45),
  w: px(288),
  h: px(42),
  color: Colors.white,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
  text: "Watchdrip+"
}

export const MESSAGE_TEXT = {
  x: (DEVICE_WIDTH - px(350)) / 2,
  y: px(90),
  w: px(350),
  h: px(38),
  color: Colors.white,
  text_size: px(28),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
}

export const MESSAGE_TEXT2 = {
  x: (DEVICE_WIDTH - px(350)) / 2,
  y: px(125),
  w: px(350),
  h: px(38),
  color: Colors.white,
  text_size: px(28),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
}

export const MESSAGE_TEXT3 = {
  x: (DEVICE_WIDTH - px(350)) / 2,
  y: px(160),
  w: px(350),
  h: px(38),
  color: Colors.white,
  text_size: px(28),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
}

export const VERSION_TEXT = {
  x: (DEVICE_WIDTH - px(288)) / 2,
  y: DEVICE_HEIGHT - px(40),
  w: px(288),
  h: px(28),
  color: Colors.white,
  text_size: px(25),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
}
