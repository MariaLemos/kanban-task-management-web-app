import styled from "styled-components";

export const Input: React.FC<
  {
    label: string;
    className?: string;
    errorMessage?: string;
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    icon?: JSX.Element;
  } & Partial<HTMLInputElement>
> = ({
  label,
  errorMessage,
  placeholder,
  onClick,
  onFocus,
  onBlur,
  className,
  value,
  readOnly,
  icon,
}) => {
  return (
    <StyledLabel className={className} onClick={onClick}>
      {label}
      <InputWrapper hasError={Boolean(errorMessage)}>
        <StyledInput
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {icon && (
          <Icon onClick={(event) => event.stopPropagation()}>{icon}</Icon>
        )}
      </InputWrapper>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.default.fontColor};
`;

const InputWrapper = styled.div<{ hasError: boolean }>`
  background: ${({ theme }) => theme.default.bg};

  border: 1px solid rgba(130, 143, 163, 0.25);
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.red : "rgba(130, 143, 163, 0.25)"};
  border-radius: 4px;
  margin: 0.5rem 0;
  display: flex;
  font-size: 13px;
  line-height: 23px;
  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.mainPurple};
  }
`;
const StyledInput = styled.input`
  background: ${({ theme }) => theme.default.bg};
  color: ${({ theme }) => theme.default.fontColor};
  border: none;
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  line-height: 23px;

  &:not(:active, :focus) {
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;
const Icon = styled.span`
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  flex-shrink: 0;
`;
const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.red};
  flex-shrink: 0;
  text-align: right;
  padding: 0.5rem 1rem;
`;
