import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useBoards } from "../../AppContext";
import { CheckListItem } from "../../commons/checkListItem";
import { DropDown } from "../../commons/dropdown";
import { ContextMenuComponent } from "../contextMenu/contextMenu.component";

export const TaskDetailsComponent: React.FC<{ task: Task }> = ({ task }) => {
  const { title, status, description, subtasks } = task;
  const useFormParams = useForm({
    defaultValues: {
      status,
    },
  });
  const { selectedBoard } = useBoards();

  const statusNames = selectedBoard?.columns.reduce(
    (acc, column) => {
      if (!acc.includes(column.name)) {
        return [...acc, column.name];
      }

      return acc;
    },
    [status]
  ) ?? [status];

  return (
    <TaskDetails>
      <h2>{title}</h2>{" "}
      <ContextMenuComponent
        contextName={"task"}
        editAction={function (): void {
          throw new Error("Function not implemented.");
        }}
        deleteAction={function (): void {
          throw new Error("Function not implemented.");
        }}
        selectedItemName={task.title}
      />
      <p className="large">{description}</p>
      <strong>Subtasks ()</strong>
      <ul>
        {subtasks.map((subtask) => (
          <CheckListItem
            key={subtask.title}
            isDone={subtask.isCompleted}
            onChange={() => {}}
          >
            {subtask.title}
          </CheckListItem>
        ))}
      </ul>
      <DropDown
        label={"status"}
        optionNames={statusNames}
        value={status}
        name="status"
        useFormParams={useFormParams}
      />
    </TaskDetails>
  );
};
const TaskDetails = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  justify-content: space-between;
  > ul,
  strong,
  p {
    width: 100%;
  }
`;
