import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../commons/button";
import { InputWithLabel } from "../../../commons/inputWithLabel";
import { FieldsArray } from "../../../commons/fieldsArray";
import { useBoards } from "../../../AppContext";
import { useModal } from "../../../commons/modal/modal.Provider";

export const BoardFormComponent: React.FC<{ board?: Board }> = ({ board }) => {
  const formMode = board ? "edit" : "add";
  const FormLocales = {
    button: { add: "Create New Board", edit: "Save Changes" },
    title: { edit: "Edit Board", add: "Add New Board" },
  };

  const useFormParams = useForm<Board>({ defaultValues: board });
  const { control, handleSubmit } = useFormParams;
  const { addBoard } = useBoards();
  const { closeModal } = useModal();
  return (
    <BoardForm
      onSubmit={handleSubmit((data) => {
        addBoard(data);
        closeModal();
      })}
    >
      <FormTitle>{FormLocales.title[formMode]}</FormTitle>
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
      <Button>{FormLocales.button[formMode]}</Button>
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
