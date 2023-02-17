import styled from "styled-components";
import { useBoards, useShowSideBar } from "../../AppContext";
import { ThemeToggle } from "../themeToggle/themeToggle";
import { BoardLink } from "./boardLink";

export const SideBar: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const boards = useBoards();
  return showSideBar ? (
    <>
      <OpacityShadow onClick={() => setShowSideBar(false)} />
      <StyledSidebar>
        <BoardsTitle>ALL BOARDS ({boards.length})</BoardsTitle>
        <ul>
          {boards.map((board) => {
            return (
              <BoardLink key={board.name} link={"board.link"}>
                {board.name}
              </BoardLink>
            );
          })}
          <AddBoardLink link={""}>+ Create New Board</AddBoardLink>
        </ul>
        <ThemeToggle />
      </StyledSidebar>
    </>
  ) : null;
};
const AddBoardLink = styled(BoardLink)`
  color: ${({ theme }) => theme.mainPurple};
  > svg > path {
    fill: ${({ theme }) => theme.mainPurple};
  }
`;
const BoardsTitle = styled.h4`
  margin: 16px 24px;
`;
const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.aside.bg};

  min-width: 260px;

  position: absolute;
  z-index: 2;
  top: 6rem;
  left: calc(50% - 260px / 2);
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
`;
const OpacityShadow = styled.div`
  display: table;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);
`;
