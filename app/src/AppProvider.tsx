import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";
import Data from "./data.json";
import { getPreferredTheme } from "./helpers/getPreferredTheme";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(getPreferredTheme());

  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  const changeTheme = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };

  const boards = Data.boards;
  return (
    <AppContext.Provider
      value={{
        showSideBar,
        themeName,
        setThemeName: changeTheme,
        setShowSideBar,
        boards,
      }}
    >
      <ThemeProvider theme={themeMap[themeName]}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
