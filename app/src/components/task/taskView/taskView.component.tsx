import { useState } from "react";
import styled from "styled-components";
import { useBoards } from "../../../AppContext";
import { ContextMenuComponent } from "../../contextMenu/contextMenu.component";
import { TaskForm } from "../taskForm/taskForm.component";
import { TaskViewForm } from "./taskView.form";

export const TaskViewComponent: React.FC<{
  task: Task;
  index: number;
  field: Record<"id", string>;
}> = ({ task, index, field }) => {
  const { title, description } = task;

  const { selectedBoard, editBoard } = useBoards();
  const [mode, setMode] = useState<"view" | "edit">("view");
  if (!selectedBoard) {
    return null;
  }
  if (mode === "edit") {
    return <TaskForm task={task} index={index} />;
  }

  return (
    <TaskDetails>
      <h2>{title}</h2>
      <ContextMenuTask
        contextName={"task"}
        editAction={() => setMode("edit")}
        deleteAction={() => {
          editBoard({
            ...selectedBoard,
            columns: selectedBoard.columns.map((column) => {
              if (column.name === task.status) {
                return {
                  name: column.name,
                  tasks: column.tasks.filter(
                    (columnTask) => columnTask.title !== task.title
                  ),
                };
              }
              return column;
            }),
          });
        }}
        selectedItemName={task.title}
      />
      <p className="large">{description}</p>
      <TaskViewForm task={task} index={index} />
    </TaskDetails>
  );
};
const ContextMenuTask = styled(ContextMenuComponent)`
  position: absolute;
  right: 2rem;
`;

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
  h2 {
    padding-right: 0.5rem;
  }
`;
