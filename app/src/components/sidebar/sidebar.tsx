import styled from "styled-components";
import { useBoards } from "../../AppContext";
import { ThemeToggle } from "../themeToggle/themeToggle";
import { BoardLink } from "./boardLink";

export const SideBar: React.FC = () => {
  const boards = useBoards();

  return (
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
  );
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
const StyledSidebar = styled.div`
  min-width: 260px;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`;
