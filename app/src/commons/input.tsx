import { Control, Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

export const Input: React.FC<
  {
    className?: string;
    errorMessage?: string;
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    icon?: JSX.Element;
  } & Partial<React.InputHTMLAttributes<HTMLInputElement>>
> = ({
  errorMessage,
  placeholder,
  onFocus,
  onClick,
  className,
  value,
  readOnly,
  icon,

  name,
  ...rest
}) => {
  const { control } = useFormContext();
  return (
    <InputWrapper hasError={Boolean(errorMessage)} className={className}>
      <Controller
        name={name ?? ""}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <StyledInput
            {...rest}
            name={name}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            onFocus={onFocus}
            onClick={onClick}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
        )}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {icon && <Icon onClick={(event) => event.stopPropagation()}>{icon}</Icon>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ hasError: boolean }>`
  background: ${({ theme }) => theme.default.bg};

  border: 1px solid rgba(130, 143, 163, 0.25);
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.red : "rgba(130, 143, 163, 0.25)"};
  border-radius: 4px;
  width: 100%;
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
