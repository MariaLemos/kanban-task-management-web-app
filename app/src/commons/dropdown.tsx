import { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowSvg } from "../assets/icon-chevron-down.svg";
import { InputWithLabel } from "./inputWithLabel";
import { Control, FieldValues, UseFormReturn } from "react-hook-form";
export const DropDown: React.FC<
  {
    label: string;
    name: string;
    optionNames: string[];

    useFormParams: UseFormReturn<any, any>;
  } & Partial<HTMLSelectElement>
> = ({ label, optionNames, useFormParams, name }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { setValue, control } = useFormParams;

  return (
    <StyledDropdown>
      <StyledInput
        name={name}
        label={label}
        isOpen={showOptions}
        onFocus={() => {
          setShowOptions(true);
        }}
        onClick={() => setShowOptions(!showOptions)}
        icon={<ArrowSvg />}
        control={control}
        readOnly
      />

      {showOptions && (
        <DropdownWrapper>
          {optionNames.map((optionName) => (
            <Option
              key={optionName}
              onClick={(event) => {
                event.stopPropagation();
                setValue("status", optionName);
                setShowOptions(false);
              }}
            >
              {optionName}
            </Option>
          ))}
        </DropdownWrapper>
      )}
    </StyledDropdown>
  );
};
const StyledDropdown = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  width: 100%;
`;
const StyledInput = styled(InputWithLabel)<{ isOpen: boolean }>`
  transition: 0.5s;

  input {
    user-select: none;
    cursor: pointer;
  }
  ${({ isOpen }) =>
    isOpen
      ? css`
          > div {
            border: 1px solid rgba(130, 143, 163, 0.25);
            border-color: ${({ theme }) => theme.mainPurple};
          }
        `
      : ""}
`;
const DropdownWrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.default.bg};

  width: 100%;
`;
const Option = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.default.bg};
  color: ${({ theme }) => theme.mediumGrey};
  border: none;
  text-align: left;
`;
