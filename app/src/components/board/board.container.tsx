import { useBoards } from "../../AppContext";
import { EmptyMessage } from "../../commons/emptyMessage";
import { useModal } from "../../commons/modal/modal.Provider";
import { BoardComponent } from "./board.component";
import { BoardFormComponent } from "./components/boardForm.component";

export const BoardContainer: React.FC = () => {
  const { selectedBoard } = useBoards();
  const { openModal } = useModal();
  if (!selectedBoard) {
    return (
      <EmptyMessage
        contextName="board"
        createAction={() => openModal({}, <BoardFormComponent />)}
      >
        You don't have a board yet
      </EmptyMessage>
    );
  }
  return <BoardComponent selectedBoard={selectedBoard}></BoardComponent>;
};
