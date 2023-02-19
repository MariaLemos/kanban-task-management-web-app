import { useForm, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../commons/button";
import { Input } from "../../../commons/input";
import { InputWithLabel } from "../../../commons/inputWithLabel";
import { ReactComponent as IconDelete } from "../../../assets/icon-cross.svg";
import { FieldsArray } from "../../../commons/fieldsArray";

export const BoardFormComponent: React.FC<{ board?: Board }> = ({ board }) => {
  const formMode = board ? "edit" : "add";
  const FormLocales = {
    button: { add: "Create New Board", edit: "Save Changes" },
    title: { edit: "Edit Board", add: "Add New Board" },
  };

  const useFormParams = useForm();
  const { register, handleSubmit } = useFormParams;

  return (
    <BoardForm onSubmit={handleSubmit((data) => console.log(data))}>
      <FormTitle>{FormLocales.title[formMode]}</FormTitle>
      <InputWithLabel
        label="Name"
        placeholder={"e.g. Web Design"}
        {...register(`name`)}
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
