import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../commons/button";
import { InputWithLabel } from "../../../commons/inputWithLabel";
import { FieldsArray } from "../../../commons/fieldsArray";
import { useBoards } from "../../../AppContext";
import { useModal } from "../../../commons/modal/modal.Provider";

export const BoardFormComponent: React.FC<{
  board?: Board;
  index?: number;
}> = ({ board, index }) => {
  const formMode = board ? "edit" : "add";
  const { editBoard, addBoard } = useBoards();

  const FormLocales = {
    add: {
      button: "Create New Board",
      title: "Add New Board",
      action: addBoard,
    },
    edit: {
      button: "Save Changes",
      title: "Edit Board",
      action: editBoard,
    },
  };

  const useFormParams = useForm<Board>({ defaultValues: board });
  const { control, handleSubmit } = useFormParams;
  const { closeModal } = useModal();

  return (
    <BoardForm
      onSubmit={handleSubmit((data) => {
        FormLocales[formMode].action(data, index ?? -1);
        closeModal();
      })}
    >
      <FormTitle>{FormLocales[formMode].title}</FormTitle>
      <InputWithLabel
        label="Name"
        placeholder={"e.g. Web Design"}
        name="name"
        control={control}
      />

      <FieldsArray
        name="columns"
        useFormParams={useFormParams}
        contextName={"column"}
      />
      <Button>{FormLocales[formMode].button}</Button>
    </BoardForm>
  );
};

const BoardForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  strong {
    color: ${({ theme }) => theme.mediumGrey};
    width: 100%;
  }
`;
const FormTitle = styled.h2`
  color: ${({ theme }) => theme.titleColor};
`;
