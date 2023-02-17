import styled, { css, useTheme } from "styled-components";

export const Button: React.FC<{
  variant: ButtonType;
  children: JSX.Element | string;
  size?: "small" | "large";
}> = ({ children, size, variant }) => {
  const theme = useTheme();
  return (
    <StyledButton size={size} variant={variant} theme={theme}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button<{ size?: string; variant: ButtonType }>`
  padding: 0 25px;
  border: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
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
