import styled, { css } from "styled-components";
import { ReactComponent as IconBoard } from "../../assets/icon-board.svg";

export const BoardLinkComponent: React.FC<{
  children: string;
  action: () => void;
  className?: string;
  isActive: boolean;
}> = ({ children, action, className, isActive }) => {
  return (
    <BoardLink
      role="link"
      onClick={action}
      className={className}
      isActive={isActive}
    >
      <IconBoard />
      <h3 key={children}>{children}</h3>
    </BoardLink>
  );
};
const BoardLink = styled.a<{ isActive: boolean }>`
  display: flex;
  padding: 14px 24px;
  border-radius: 0px 100px 100px 0px;
  gap: 12px;
  width: calc(100% - 24px);
  color: ${({ theme }) => theme.mediumGrey};

  text-decoration: none;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        background-color: ${({ theme }) => theme.mainPurple};
        color: ${({ theme }) => theme.white};
        > svg > path {
          fill: ${({ theme }) => theme.white};
        }
      `;
    }
  }}
  &:hover {
    background-color: ${({ theme }) => theme.mainPurple};
    color: ${({ theme }) => theme.white};
    > svg > path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;
