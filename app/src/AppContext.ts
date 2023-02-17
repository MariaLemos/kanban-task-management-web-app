import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type AppContextType = {
  themeName: ThemeName;
  showSideBar: boolean;
  setThemeName: (themeName: ThemeName) => void;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  boards: Board[];
};
const contextDefaultValues: AppContextType = {
  themeName: "light",
  setThemeName: () => null,
  showSideBar: true,
  setShowSideBar: () => null,
  boards: [],
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useThemeName = () => {
  const { themeName, setThemeName } = useContext(AppContext);
  return { themeName, setThemeName };
};

export const useShowSideBar = () => {
  const { showSideBar, setShowSideBar } = useContext(AppContext);
  return { showSideBar, setShowSideBar };
};
export const useBoards = () => {
  return useContext(AppContext).boards;
};
