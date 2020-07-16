export interface ThemeDetails {
  themeName: Themes;
  mainGrey: String;
  mainWhite: String;
  mainBlack: String;
  darkGrey: String;
}

export enum Themes {
  "dark" = "dark",
  "white" = "white",
}

const whiteTheme: ThemeDetails = {
  themeName: Themes.white,
  mainGrey: "#ecececc0",
  mainWhite: "rgb(255, 255, 255)",
  mainBlack: "rgb(25, 25, 25)",
  darkGrey: "#8e8e8e",
};

export const darkTheme: ThemeDetails = {
  themeName: Themes.dark,
  mainGrey: "#8e8e8e",
  mainWhite: "rgb(25, 25, 25)",
  mainBlack: "rgb(255, 255, 255)",
  darkGrey: "#ecececc0",
};

export const mapThemeNameToDetails = {
  [Themes.dark]: darkTheme,
  [Themes.white]: whiteTheme,
};

export const revertThemes = {
  dark: "white",
  white: "dark",
};