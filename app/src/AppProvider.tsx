import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const userPrefenceByBrowser = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  const [themeName, setThemeName] = useState<ThemeName>(userPrefenceByBrowser);

  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        showSideBar,
        themeName,
        setThemeName,
        setShowSideBar,
      }}
    >
      <ThemeProvider theme={themeMap[themeName]}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
