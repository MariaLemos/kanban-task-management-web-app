import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import styled from "styled-components";
import { useBoards } from "../../../AppContext";
import { CheckListItem } from "../../../commons/checkListItem";
import { DropDown } from "../../../commons/dropdown";
import { getSubtasksConcludedProportion } from "../tasks.helper";

export const TaskViewForm: React.FC<{ task: Task; index: number }> = ({
  task,
  index: taskIndex,
}) => {
  const { status, subtasks } = task;

  const { selectedBoard, editBoard } = useBoards();
  const useFormMetods = useFormContext<Board>();
  const { control, getValues } = useFormMetods;

  const atualColumnIndex =
    selectedBoard?.columns.findIndex((column) => column.name === task.status) ??
    0;
  const { fields } = useFieldArray<Board>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: `columns.${atualColumnIndex}.tasks.${taskIndex}.subtasks`, // unique name for your Field Array
  });

  const statusNames = selectedBoard?.columns.reduce(
    (acc, column) => {
      if (!acc.includes(column.name)) {
        return [...acc, column.name];
      }

      return acc;
    },
    [status]
  ) ?? [status];
  const [subtasksConcluded, totalOfSubtasks] =
    getSubtasksConcludedProportion(task);
  return (
    <DetailsForm>
      <strong>Subtasks ({`${subtasksConcluded} of ${totalOfSubtasks}`})</strong>
      <ul>
        {fields.map((subtask, index) => (
          <Controller
            key={subtask.id}
            name={`columns.${atualColumnIndex}.tasks.${taskIndex}.subtasks.${index}.isCompleted`}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <CheckListItem
                name={`columns.${atualColumnIndex}.tasks.${taskIndex}.subtasks.${index}.isCompleted`}
                isDone={value}
                onChange={onChange}
                onBlur={onBlur}
                refCallBack={ref}
              >
                {subtasks[index]?.title}
              </CheckListItem>
            )}
          />
        ))}
      </ul>
      <DropDown
        label={"status"}
        optionNames={statusNames}
        value={status}
        name={`columns.${atualColumnIndex}.tasks.${taskIndex}.status`}
      />
    </DetailsForm>
  );
};

const DetailsForm = styled.div`
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
