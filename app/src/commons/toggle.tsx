import { useState } from "react";
import styled from "styled-components";

export const Toggle: React.FC<{
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  name: string;
}> = ({ isChecked: defaultValue, onChange, name }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  return (
    <StyledToggle role="switch">
      <Checkbox
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange(!isChecked);
        }}
      />
    </StyledToggle>
  );
};
const StyledToggle = styled.label`
  padding: 3px;
  border-radius: 12px;
  height: 20px;
  width: 40px;

  background-color: ${({ theme }) => theme.mainPurple};
  &:hover {
    background-color: ${({ theme }) => theme.mainPurpleWithTransaprency};
  }
`;
const Checkbox = styled.input`
  margin-right: 1rem;
  height: 1rem;
  width: 1rem;
  visibility: hidden;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    visibility: visible;
    background-color: ${({ theme }) => theme.white};
    transition: all 0.5s;
  }
  &:focus:active,
  &:focus:after,
  &:focus-visible:after,
  &:focus-within:after {
    outline: 2px solid ${({ theme }) => theme.mainPurple};
  }
  &:checked:after {
    transform: translateX(150%);
  }
`;
