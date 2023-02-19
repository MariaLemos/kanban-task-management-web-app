import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";
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

  const localBoards: Board[] = JSON.parse(
    localStorage.getItem("boards") ?? "[]"
  );
  const boardList = localBoards.length > 0 ? localBoards : [];
  const [selectedBoard, setSelectedBoard] = useState<Board>(boardList[0]);

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
