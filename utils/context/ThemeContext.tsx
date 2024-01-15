// ThemeContext.js
import { createContext, useContext } from "react";
import LightTheme from "../../themes/LightTheme";
import { ThemeContextType } from "../../types/context/ThemeContext";


const ThemeContext = createContext<ThemeContextType>({
  theme: {...LightTheme},
  toggleTheme: () => {},
});

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeContext;
