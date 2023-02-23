import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { useBoards } from "../../../AppContext";
import { Button } from "../../../commons/button";
import { FieldsArray } from "../../../commons/fieldsArray";
import { InputWithLabel } from "../../../commons/inputWithLabel";
import { useModal } from "../../../commons/modal/modal.Provider";
import { TaskStatusComponent } from "../components/taskStatus.component";

export const TaskForm: React.FC<{ task?: Task; index?: number }> = ({
  task,
  index: taskIndex = 0,
}) => {
  const { selectedBoard } = useBoards();
  const collumnIndex = selectedBoard?.columns.findIndex(
    (column) => column.name === task?.status
  );
  const atualColumnIndex =
    collumnIndex === -1
      ? 0
      : selectedBoard?.columns.findIndex(
          (column) => column.name === task?.status
        ) ?? 0;

  const { closeModal } = useModal();

  return (
    <DetailsForm>
      <InputWithLabel
        label={"Title"}
        name={`columns.${atualColumnIndex}.tasks.${taskIndex}.title`}
      />
      <FieldsArray
        name={`columns.${atualColumnIndex}.tasks.${taskIndex}.subtasks`}
        contextName="subtask"
        nameField="title"
      />

      <TaskStatusComponent
        taskStatus={task?.status}
        atualColumnIndex={atualColumnIndex}
        index={taskIndex}
      />
      <Button onClick={closeModal}>Save Changes</Button>
    </DetailsForm>
  );
};

const DetailsForm = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  max-height: 80vh;
  overflow: overlay;
  justify-content: space-between;
  > ul,
  strong,
  p {
    width: 100%;
  }
  h2 {
    padding-right: 0.5rem;
  }
`;
