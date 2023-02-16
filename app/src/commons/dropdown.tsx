import { useState } from "react";
import styled from "styled-components";
import { Input } from "./input";
import { ReactComponent as ArrowSvg } from "../assets/icon-chevron-down.svg";
export const DropDown: React.FC<
  {
    label: string;
    optionNames: string[];
    value?: string;
  } & Partial<HTMLSelectElement>
> = ({ label, optionNames, value }) => {
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <StyledDropdown>
      <StyledInput
        value={selectedValue}
        label={label}
        onClick={() => {
          console.log("click");
          setShowOptions(!showOptions);
        }}
        icon={<ArrowSvg />}
        readOnly
      />

      {showOptions && (
        <DropdownWrapper>
          {optionNames.map((optionName) => (
            <Option
              onClick={() => {
                setSelectedValue(optionName);
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
`;
const StyledInput = styled(Input)`
  transition: 0.5s;
  input {
    user-select: none;
  }
  > div {
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-color: ${({ theme }) => theme.mainPurple};
  }
`;
const DropdownWrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.dropdown.bg};

  width: 100%;
`;
const Option = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  width: 100%;
  cursor: pointer;
`;
