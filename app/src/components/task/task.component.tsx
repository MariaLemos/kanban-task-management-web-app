import styled from "styled-components";
import { useModal } from "../../commons/modal/modal.Provider";
import { TaskDetailsComponent } from "./taskDetails.component";

export const TaskComponent: React.FC<{ task: Task }> = ({ task }) => {
  const totalOfSubtasks = task.subtasks.length;
  const subtasksConcluded = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const { openModal } = useModal();
  return (
    <Task onClick={() => openModal({}, <TaskDetailsComponent task={task} />)}>
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
