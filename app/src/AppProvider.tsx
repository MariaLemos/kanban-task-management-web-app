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
  const changeTheme = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  const [selectedBoard, setSelectedBoard] = useState<Board>();
  const localBoards: Board[] = JSON.parse(
    localStorage.getItem("boards") ?? "[]"
  );
  const boardList = localBoards.length > 0 ? localBoards : Data.boards;

  return (
    <AppContext.Provider
      value={{
        theme: { themeName, setThemeName: changeTheme },
        sideBar: {
          showSideBar,

          setShowSideBar,
        },

        boards: {
          boardList,
          selectedBoard,
          setSelectedBoard,
        },
      }}
    >
      <ThemeProvider theme={themeMap[themeName]}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
