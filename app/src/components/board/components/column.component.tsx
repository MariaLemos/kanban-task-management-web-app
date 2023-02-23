import { useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { TaskComponent } from "../../task/task.component";

export const BoardColumnComponent: React.FC<{
  column: Column;
  index: number;
}> = ({ column, index }) => {
  const { name, tasks = [] } = column;
  const { fields, append, remove } = useFieldArray({
    name: `columns.${index}.tasks`, // unique name for your Field Array
  });
  return (
    <Column>
      <h4>{`${name} (${tasks.length})`}</h4>
      {fields.map((field, index) => (
        <TaskComponent
          key={field.id}
          task={tasks[index]}
          field={field}
          index={index}
        />
      ))}
    </Column>
  );
};
const Column = styled.div``;
