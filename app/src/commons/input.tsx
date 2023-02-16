import styled from "styled-components";

export const Input: React.FC<
  {
    errorMessage?: string;
    label: string;
  } & Partial<HTMLInputElement>
> = ({ label, errorMessage, placeholder }) => {
  return (
    <StyledLabel>
      {label}
      <InputWrapper hasError={Boolean(errorMessage)}>
        <StyledInput placeholder={placeholder} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputWrapper>
    </StyledLabel>
  );
};
const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.red};
  flex-shrink: 0;
  text-align: right;
  padding: 0.5rem 1rem;
`;
const InputWrapper = styled.div<{ hasError: boolean }>`
  background: ${({ theme }) => theme.input.bg};

  border: 1px solid rgba(130, 143, 163, 0.25);
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.red : "rgba(130, 143, 163, 0.25)"};
  border-radius: 4px;
  margin: 0.5rem 0;
  display: flex;
  font-size: 13px;
  line-height: 23px;
`;
const StyledLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.input.fontColor};
`;
const StyledInput = styled.input`
  background: ${({ theme }) => theme.input.bg};
  color: ${({ theme }) => theme.input.fontColor};
  border: none;
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;

  &:not(:active, :focus) {
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;
