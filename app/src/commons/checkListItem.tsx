import { useState } from "react";
import styled from "styled-components";
import IconCheck from "../assets/icon-check.svg";

export const CheckListItem: React.FC<{
  isDone: boolean;
  label: string;
}> = ({ label, isDone }) => {
  const [isChecked, setIsChecked] = useState(isDone);
  return (
    <StyledCheckListItem>
      <Checkbox
        id="statusCheck"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Label htmlFor="statusCheck">{label}</Label>
    </StyledCheckListItem>
  );
};
const StyledCheckListItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;

  background-color: ${({ theme }) => theme.default.bg};
  &:hover {
    background-color: ${({ theme }) => theme.mainPurpleWithTransaprency};
  }
`;
const Checkbox = styled.input`
  margin-right: 1rem;
  height: 1rem;
  width: 1rem;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 1rem;
    width: 1rem;
    visibility: visible;
    background-color: ${({ theme }) => theme.darkGrey};
  }
  &:focus:active,
  &:focus:after,
  &:focus-visible:after,
  &:focus-within:after {
    outline: 2px solid ${({ theme }) => theme.mainPurple};
  }
  &:checked:after {
    background-color: ${({ theme }) => theme.mainPurple};
    background-image: url(${IconCheck});
    background-repeat: no-repeat;
    background-size: 10px 8px;
    background-position: center;
  }
  &:checked + label {
    text-decoration: line-through;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
const Label = styled.label`
  line-height: 1rem;
  display: flex;
`;
