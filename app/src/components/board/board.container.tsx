import { useBoards } from "../../AppContext";
import { EmptyMessage } from "../../commons/emptyMessage";
import { BoardComponent } from "./board.component";

export const BoardContainer: React.FC = () => {
  const { selectedBoard } = useBoards();
  if (!selectedBoard) {
    return (
      <EmptyMessage contextName="board" createAction={console.log}>
        You don't have a board yet
      </EmptyMessage>
    );
  }
  return <BoardComponent selectedBoard={selectedBoard}></BoardComponent>;
};
