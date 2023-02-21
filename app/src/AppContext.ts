import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type AppContextType = {
  theme: {
    themeName: ThemeName;
    setThemeName: (themeName: ThemeName) => void;
  };
  sideBar: {
    showSideBar: boolean;
    setShowSideBar: Dispatch<SetStateAction<boolean>>;
  };
  boards: {
    setSelectedBoard: (board: Board) => void;
    addBoard: (board: Board) => void;
    editBoard: (board: Board) => void;
    deleteBoard: (board: Board) => void;
    selectedBoard: Board | undefined;
    boardList: Board[];
  };
};
const contextDefaultValues: AppContextType = {
  theme: { themeName: "light", setThemeName: () => null },
  sideBar: {
    showSideBar: true,
    setShowSideBar: () => null,
  },

  boards: {
    addBoard: (board) => {},
    editBoard: (board) => {},
    deleteBoard: (board) => {},
    setSelectedBoard: (board) => {},
    selectedBoard: undefined,
    boardList: [],
  },
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useThemeName = () => {
  return useContext(AppContext).theme;
};

export const useShowSideBar = () => {
  return useContext(AppContext).sideBar;
};
export const useBoards = () => {
  return useContext(AppContext).boards;
};
