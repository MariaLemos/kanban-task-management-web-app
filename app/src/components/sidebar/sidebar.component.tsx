import styled from "styled-components";
import { useBoards } from "../../AppContext";
import { useModal } from "../../commons/modal/modal.Provider";
import { BoardFormComponent } from "../board/components/boardForm.component";
import { ThemeToggleComponent } from "../themeToggle/themeToggle.component";
import { BoardLinkComponent } from "./boardLink.component";

export const SideBarComponent: React.FC = () => {
  const { boardList, setSelectedBoard } = useBoards();
  const { openModal } = useModal();
  return (
    <StyledSidebar>
      <BoardsTitle>ALL BOARDS ({boardList.length})</BoardsTitle>
      <ul>
        {boardList.map((board) => {
          return (
            <BoardLinkComponent
              key={board.name}
              action={() => setSelectedBoard(board)}
            >
              {board.name}
            </BoardLinkComponent>
          );
        })}
        <AddBoardLink action={() => openModal({}, <BoardFormComponent />)}>
          + Create New Board
        </AddBoardLink>
      </ul>
      <ThemeToggleComponent />
    </StyledSidebar>
  );
};
const AddBoardLink = styled(BoardLinkComponent)`
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
