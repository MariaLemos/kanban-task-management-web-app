import styled from "styled-components";
import { TaskComponent } from "../../task/task.component";

export const BoardColumnComponent: React.FC<{ column: Column }> = ({
  column,
}) => {
  const { name, tasks = [] } = column;
  return (
    <Column>
      <h4>{`${name} (${tasks.length})`}</h4>
      {tasks.map((task) => (
        <TaskComponent key={task.title} task={task} />
      ))}
    </Column>
  );
};
const Column = styled.div``;
