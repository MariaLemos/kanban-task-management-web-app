import { EmptyMessage } from "../../commons/emptyMessage";
import { BoardColumnComponent } from "./components/column.component";

export const BoardComponent: React.FC<{ selectedBoard: Board }> = ({
  selectedBoard,
}) => {
  if (selectedBoard.columns.length === 0) {
    <EmptyMessage contextName="column" createAction={console.log}>
      This board is empty. Create a new column to get started.
    </EmptyMessage>;
  }
  return (
    <>
      {selectedBoard.columns.map((column) => (
        <BoardColumnComponent column={column} />
      ))}
    </>
  );
};
