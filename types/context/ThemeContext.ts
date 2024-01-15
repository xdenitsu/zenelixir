import { Theme } from "../misc/Theme";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
