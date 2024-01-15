// ThemeProvider.js
import { useState } from "react";
import { ThemeProviderProps } from "../../types/providers/ThemeProvider";
import ThemeContext from "../context/ThemeContext";
import { Theme } from "../../types/misc/Theme";
import LightTheme from "../../themes/LightTheme";
import DarkTheme from "../../themes/DarkTheme";
import { ThemeContextType } from "../../types/context/ThemeContext";

function ThemeProvider({
  children,
  defaultTheme,
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LightTheme ? DarkTheme : LightTheme));
  };
  
  const contextValue: ThemeContextType = {
    theme: {...theme},
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
