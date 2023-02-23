import { useBoards } from "../../../AppContext";
import { DropDown } from "../../../commons/dropdown";

export const TaskStatusComponent: React.FC<{
  taskStatus?: string;
  index?: number;
  atualColumnIndex?: number;
}> = ({ taskStatus = "", index, atualColumnIndex = 0 }) => {
  const { selectedBoard } = useBoards();
  const taskIndex =
    index ?? selectedBoard?.columns[atualColumnIndex]?.tasks?.length ?? 0;

  const statusNames = selectedBoard?.columns.reduce(
    (acc, column) => {
      if (!acc.includes(column.name)) {
        return [...acc, column.name];
      }

      return acc;
    },
    [taskStatus]
  ) ?? [taskStatus];

  return (
    <DropDown
      label={"status"}
      optionNames={statusNames}
      value={taskStatus}
      name={`columns.${atualColumnIndex}.tasks.${taskIndex}.status`}
    />
  );
};
