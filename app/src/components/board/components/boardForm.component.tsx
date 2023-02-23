import { useForm, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../commons/button";
import { InputWithLabel } from "../../../commons/inputWithLabel";
import { FieldsArray } from "../../../commons/fieldsArray";
import { useBoards } from "../../../AppContext";
import { useModal } from "../../../commons/modal/modal.Provider";
import { useEffect } from "react";

export const BoardFormComponent: React.FC<{
  board?: Board;
}> = ({ board }) => {
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

  const useFormParams = useFormContext<Board>();
  const { handleSubmit, reset } = useFormParams;
  const { closeModal } = useModal();
  useEffect(() => {
    if (!board) {
      reset({ name: "", columns: [] });
    }
  }, []);

  return (
    <BoardForm
      onSubmit={handleSubmit((data) => {
        FormLocales[formMode].action(data);
        closeModal();
      })}
    >
      <FormTitle>{FormLocales[formMode].title}</FormTitle>
      <InputWithLabel
        label="Name"
        placeholder={"e.g. Web Design"}
        name="name"
      />

      <FieldsArray name="columns" contextName={"column"} nameField="name" />
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
