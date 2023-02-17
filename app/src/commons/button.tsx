import styled, { css, useTheme } from "styled-components";

export const Button: React.FC<{
  variant: ButtonType;
  children: JSX.Element | string;
  size?: "small" | "large";
  className?: string;
}> = ({ children, size, variant, className }) => {
  const theme = useTheme();
  return (
    <StyledButton
      size={size}
      variant={variant}
      theme={theme}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button<{ size?: string; variant: ButtonType }>`
  padding: 0 1.5rem;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2;
  min-width: 4rem;
  ${({ theme: { buttons }, variant, size }) => {
    const { bg, fontColor, hover } = buttons[variant];
    return css`
      background: ${bg};
      color: ${fontColor};
      height: ${size === "large" ? "48px" : "40px"};
      border-radius: ${size === "large" ? "24px" : "20px"};
      &:hover {
        background: ${hover};
      }
    `;
  }}
`;
