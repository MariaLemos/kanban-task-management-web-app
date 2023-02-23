import { Control } from "react-hook-form";
import styled from "styled-components";
import { Input } from "./input";

export const InputWithLabel: React.FC<
  {
    label: string;
    className?: string;
    errorMessage?: string;
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    icon?: JSX.Element;
  } & Partial<React.InputHTMLAttributes<HTMLInputElement>>
> = ({ label, className, onClick, ...rest }) => {
  return (
    <StyledLabel className={className} onClick={onClick}>
      {label}
      <Input {...rest} />
    </StyledLabel>
  );
};

export const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.mediumGrey};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
