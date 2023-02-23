import styled from "styled-components";
import { useModal } from "../../commons/modal/modal.Provider";
import { TaskViewComponent } from "./taskView/taskView.component";
import { getSubtasksConcludedProportion } from "./tasks.helper";

export const TaskComponent: React.FC<{
  task: Task;
  field: Record<"id", string>;
  index: number;
}> = ({ task, field, index }) => {
  const [subtasksConcluded, totalOfSubtasks] =
    getSubtasksConcludedProportion(task);

  const { openModal } = useModal();
  return (
    <Task
      onClick={() =>
        openModal(
          {},
          <TaskViewComponent task={task} field={field} index={index} />
        )
      }
    >
      <h3>{task.title} </h3>
      <span>{`${subtasksConcluded} of ${totalOfSubtasks} subtasks`} </span>
    </Task>
  );
};
const Task = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.default.bg};
  padding: 2rem;
  margin: 1rem 0;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;
  h3 {
    color: ${({ theme }) => theme.titleColor};
    margin-bottom: 1rem;
  }
`;
