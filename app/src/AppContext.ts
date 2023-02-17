import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type AppContextType = {
  themeName: ThemeName;
  showSideBar: boolean;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
};
const contextDefaultValues: AppContextType = {
  themeName: "light",
  setThemeName: () => null,
  showSideBar: true,
  setShowSideBar: () => null,
};
export const AppContext = createContext<AppContextType>(contextDefaultValues);

export const useThemeName = () => [
  useContext(AppContext).themeName,
  useContext(AppContext).setThemeName,
];

export const useShowSideBar = () => {
  const { showSideBar, setShowSideBar } = useContext(AppContext);
  return { showSideBar, setShowSideBar };
};
