"use client";
import { grey, lightGreen } from "@mui/material/colors";
import { createTheme, useMediaQuery } from "@mui/material";

const { createContext, useState, useEffect } = require("react");
export const ThemeContext = createContext();

export default function ThemeContextProvider({children}: Readonly<{ children: React.ReactNode; }>) {
  const prefersMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState(prefersMode);

  useEffect(() => {
    setMode(prefersMode);
  }, [prefersMode]);

  const theme = createTheme({
    // const Theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#7cb342",
              light: "#2196f3",
              dark: "#e91e63",
            },
            divider: lightGreen[900],
            background: {
              default: lightGreen[100],
              paper: lightGreen[100],
            },
            text: {
              primary: "#212121",
              secondary: grey[900],
            },
            buttoncolor: {
              main: "#7cb342",
            },
          }
        : {
            // palette values for dark mode
            primary: { main: "#424242" },
            divider: "#000000",
            background: {
              default: "#000000e6",
              paper: "#424242",
            },
            text: {
              primary: "#ffffff",
              secondary: grey[500],
            },
            buttoncolor: {
              main: "#039be5",
            },
          }),
    },
  });

  return (
    <ThemeContext.Provider >
      {children}
    </ThemeContext.Provider>
  );
}
