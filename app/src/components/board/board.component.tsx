import styled from "styled-components";
import { EmptyMessage } from "../../commons/emptyMessage";
import { useModal } from "../../commons/modal/modal.Provider";
import { BoardFormComponent } from "./components/boardForm.component";
import { BoardColumnComponent } from "./components/column.component";

export const BoardComponent: React.FC<{ selectedBoard: Board }> = ({
  selectedBoard,
}) => {
  const { openModal } = useModal();
  if (selectedBoard.columns.length === 0) {
    return (
      <EmptyMessage
        contextName="column"
        createAction={() =>
          openModal({}, <BoardFormComponent board={selectedBoard} />)
        }
      >
        This board is empty. Create a new column to get started.
      </EmptyMessage>
    );
  }
  return (
    <Board>
      {selectedBoard.columns.map((column) => (
        <BoardColumnComponent key={column.name} column={column} />
      ))}
    </Board>
  );
};
const Board = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 280px;
  gap: 24px;
  overflow-x: scroll;
  min-height: 90vh;
`;
