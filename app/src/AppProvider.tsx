import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";
import { getPreferredTheme } from "./helpers/getPreferredTheme";
import { getLocalBoards, updateLocalBoards } from "./helpers/localBoards";
import useIsMobile from "./helpers/useIsMobile";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(getPreferredTheme());
  const changeTheme = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };
  const [showSideBar, setShowSideBar] = useState<boolean>(!useIsMobile());

  const [boardList, setBoardList] = useState(getLocalBoards());
  const [selectedBoard, setSelectedBoard] = useState<Board>(boardList[0]);

  const updateBoardList = (newBoards: Board[]) => {
    setBoardList(newBoards);
    updateLocalBoards(newBoards);
  };

  const deleteBoard = (boardToDelete: Board) => {
    const filteredBoardList = boardList.filter(
      (board) => board.name !== boardToDelete.name
    );
    updateBoardList(filteredBoardList);
  };
  const editBoard = (boardToEdit: Board) => {
    const actualIndex = boardList.findIndex(
      (board) => board.name === boardToEdit.name
    );
    boardList[actualIndex] = boardToEdit;
    updateBoardList(boardList);
  };

  const addBoard = (newBoard: Board) => {
    updateBoardList([...boardList, newBoard]);
    setSelectedBoard(newBoard);
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
          editBoard,
          deleteBoard,
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
