import styled from "styled-components";
import { Button } from "../../commons/button";
import { useModal } from "../../commons/modal/modal.Provider";

export const DeleteModalComponent: React.FC<{
  deleteAction: () => void;
  contextName: "task" | "board";
  name?: string;
}> = ({ deleteAction, contextName, name }) => {
  const { closeModal } = useModal();
  const TextMap = {
    task: `"Are you sure you want to delete the ${name} task and its subtasks? This action cannot be reversed.`,
    board: `Are you sure you want to delete the ${name} board? This action will remove all columns and tasks and cannot be reversed.`,
  };
  return (
    <DeleteModal>
      <h2>{`Delete this ${contextName}?`}</h2>
      <p className="large">{TextMap[contextName]}</p>
      <Button
        variant="destructive"
        onClick={() => {
          deleteAction();
          closeModal();
        }}
      >
        Delete
      </Button>
      <Button variant="secondary" onClick={closeModal}>
        Cancel
      </Button>
    </DeleteModal>
  );
};
const DeleteModal = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-gap: 1.5rem;
  p {
    color: ${({ theme }) => theme.mediumGrey};
  }
  h2 {
    color: ${({ theme }) => theme.red};
    margin-bottom: 0.5rem;
  }
`;
