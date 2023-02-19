import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";
import { getPreferredTheme } from "./helpers/getPreferredTheme";
import { getLocalBoards, updateLocalBoards } from "./helpers/localBoards";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(getPreferredTheme());
  const changeTheme = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  const [boardList, setBoardList] = useState(getLocalBoards());
  const [selectedBoard, setSelectedBoard] = useState<Board>(boardList[0]);

  const addBoard = (board: Board) => {
    setBoardList([...boardList, board]);
    updateLocalBoards([...boardList, board]);
    setSelectedBoard(board);
  };

  return (
    <AppContext.Provider
      value={{
        theme: { themeName, setThemeName: changeTheme },
        sideBar: {
          showSideBar,
          setShowSideBar,
        },

        boards: {
          addBoard,
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
