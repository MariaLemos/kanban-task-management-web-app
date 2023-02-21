import styled from "styled-components";
import { EmptyMessage } from "../../commons/emptyMessage";
import { useModal } from "../../commons/modal/modal.Provider";
import { BoardFormComponent } from "./components/boardForm.component";
import { BoardColumnComponent } from "./components/column.component";

export const BoardComponent: React.FC<{ selectedBoard: Board }> = ({
  selectedBoard,
}) => {
  const { openModal } = useModal();
  const newColumnAction = () =>
    openModal({}, <BoardFormComponent board={selectedBoard} />);

  if (selectedBoard.columns.length === 0) {
    return (
      <EmptyMessage contextName="column" createAction={newColumnAction}>
        This board is empty. Create a new column to get started.
      </EmptyMessage>
    );
  }
  return (
    <Board>
      {selectedBoard.columns.map((column) => (
        <BoardColumnComponent key={column.name} column={column} />
      ))}
      <NewColumnButton onClick={newColumnAction}>+ New Column</NewColumnButton>
    </Board>
  );
};
const Board = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 280px;
  gap: 24px;
  width: fit-content;

  min-height: 90vh;
  padding: 1.5rem;
`;
const NewColumnButton = styled.button`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.gradientColor} 0%,
    ${({ theme }) => theme.gradientColor} 100%
  );

  border-radius: 6px;
  font-size: 24px;
  font-weight: 700;
`;
