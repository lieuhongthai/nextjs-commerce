import { Theme } from "daisyui/src";
export type TMode = Theme;
export type TLayout = "vertical" | "horizontal";
export type TThemeSetting = {
  appName: string;
  mode: TMode;
  layout: TLayout;
};

const themeSetting: TThemeSetting = {
  appName: "MEGATON TEAM",
  mode: "light",
  layout: "horizontal",
};

export default themeSetting;
