import { useState } from "react";
import { RefCallBack } from "react-hook-form";
import styled from "styled-components";
import IconCheck from "../assets/icon-check.svg";

export const CheckListItem: React.FC<{
  isDone: boolean;
  children: string;
  onChange: () => void;
  onBlur: () => void;
  refCallBack: RefCallBack;
  name: string;
}> = ({ children, isDone, onChange, name, onBlur, refCallBack }) => {
  console.log(name, isDone);
  return (
    <StyledCheckListItem>
      <Checkbox
        name={name}
        ref={refCallBack}
        type="checkbox"
        checked={isDone}
        onBlur={onBlur}
        onChange={onChange}
      />
      <Label>{children}</Label>
    </StyledCheckListItem>
  );
};
const StyledCheckListItem = styled.label`
  list-style: none;
  margin: 0.5rem 0;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;

  background-color: ${({ theme }) => theme.main.bg};
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
const Label = styled.span`
  line-height: 1rem;
  display: flex;
`;
