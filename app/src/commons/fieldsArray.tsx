import { useFieldArray, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { ReactComponent as IconDelete } from "../assets/icon-cross.svg";
import { Button } from "./button";
import { Input } from "./input";
import { StyledLabel } from "./inputWithLabel";

export const FieldsArray: React.FC<{
  name: string;
  contextName: "subtask" | "column";
  nameField: string;
}> = ({ name, contextName, nameField }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  });
  console.log(fields);
  return (
    <FieldsLabel>
      {contextName}
      {fields.map((field, index) => (
        <LineFieldWrapper key={field.id}>
          <Input
            key={field.id} // important to include key with field's id
            name={`${name}.${index}.${nameField}`}
          />

          <ButtonDelete
            onClick={(
              event: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => {
              event.preventDefault();
              remove(index);
            }}
          >
            <IconDelete />
          </ButtonDelete>
        </LineFieldWrapper>
      ))}
      <Button
        variant="secondary"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.preventDefault();
          append({
            [nameField]: "",
            [contextName === "column" ? "task" : ""]: [],
          });
        }}
      >
        <> + Add New {contextName}</>
      </Button>
    </FieldsLabel>
  );
};

const ButtonDelete = styled.button``;
const LineFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1.3rem;
`;
const FieldsLabel = styled(StyledLabel)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;
