import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./AppContext";
import { themeMap } from "./Themes";
import { getPreferredTheme } from "./helpers/getPreferredTheme";
import { getLocalBoards, updateLocalBoards } from "./helpers/localBoards";
import useIsMobile from "./helpers/useIsMobile";
import { FormProvider, useForm, useWatch } from "react-hook-form";

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(getPreferredTheme());

  const [selectedTask, setSelectedTask] = useState<
    [task: Task, field: Record<"id", string>] | undefined
  >();
  const changeTheme = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };
  const [showSideBar, setShowSideBar] = useState<boolean>(!useIsMobile());

  const [boardList, setBoardList] = useState(getLocalBoards());
  const [selectedBoard, setSelectedBoard] = useState<Board>(
    boardList[0] ?? { name: "", columns: [] }
  );

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
    const index = boardList.findIndex(
      (board) => board.name === boardToEdit.name
    );
    boardList[index] = boardToEdit;
    updateBoardList(boardList);
    setSelectedBoard(boardToEdit);
  };

  const addBoard = (newBoard: Board) => {
    updateBoardList([...boardList, newBoard]);
    setSelectedBoard(newBoard);
  };
  const formMethods = useForm<Board>({
    defaultValues: selectedBoard,
    mode: "onBlur",
  });

  const formValues = useWatch<Board>({
    control: formMethods.control,
  });
  useEffect(() => {
    console.log(formValues);
    editBoard(formValues as Board);
  }, [formValues]);

  return (
    <AppContext.Provider
      value={{
        theme: { themeName, setThemeName: changeTheme },
        sideBar: {
          showSideBar,
          setShowSideBar,
        },
        tasks: { selectedTask, setSelectedTask },
        boards: {
          addBoard,
          editBoard,
          deleteBoard,
          boardList,
          selectedBoard,
          setSelectedBoard: (board = { name: "", columns: [] }) => {
            formMethods.reset(board);
            setSelectedBoard(board);
          },
        },
      }}
    >
      <FormProvider {...formMethods}>
        <ThemeProvider theme={themeMap[themeName]}>{children}</ThemeProvider>
      </FormProvider>
    </AppContext.Provider>
  );
};
