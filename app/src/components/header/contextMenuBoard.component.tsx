import { useBoards } from "../../AppContext";
import { useModal } from "../../commons/modal/modal.Provider";
import { BoardFormComponent } from "../board/components/boardForm.component";
import { ContextMenuComponent } from "../contextMenu/contextMenu.component";

export const ContextMenuBoardComponent: React.FC = () => {
  const { selectedBoard, deleteBoard } = useBoards();
  const { openModal } = useModal();

  if (!selectedBoard) {
    return <></>;
  }

  return (
    <ContextMenuComponent
      editAction={() =>
        openModal({}, <BoardFormComponent board={selectedBoard} />)
      }
      contextName="board"
      deleteAction={() => deleteBoard(selectedBoard)}
      selectedItemName={selectedBoard.name}
    />
  );
};
