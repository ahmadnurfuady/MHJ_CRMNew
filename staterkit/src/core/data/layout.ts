export interface LayoutSettings {
  layoutType: string;
  layout: string;
  sidebarIcon: string;
  sidebarSetting: string;
}

export interface LayoutColor {
  layoutVersion: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface LayoutConfig {
  settings: LayoutSettings;
  color: LayoutColor;
}

export const layout: LayoutConfig = {
  settings: {
    layoutType: "ltr",
    layout: "default",
    sidebarIcon: "stroke-svg",
    sidebarSetting: "compact-wrapper",
  },
  color: {
    layoutVersion: "light",
    primaryColor: "#18A6E4",
    secondaryColor: "#006878",
  },
};
