"use client";

import { createTheme, useMediaQuery } from "@mui/material";
import { getDesignTokens } from "./ThemeContext";
import { ComponentWrapper } from "./ComponentWrapper";

const { createContext, useState, useEffect } = require("react");

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const prefersMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState(prefersMode);

  useEffect(() => {
    setMode(prefersMode);
  }, [prefersMode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContextProvider>
      <ComponentWrapper>{children}</ComponentWrapper>
    </ThemeContextProvider>
  );
}
