import styled from "styled-components";
import { ReactComponent as IconBoard } from "../../assets/icon-board.svg";

export const BoardLink: React.FC<{
  children: string;
  link: string;
  className?: string;
}> = ({ children, link, className }) => {
  return (
    <StyledBoardLink role="link" href={link} className={className}>
      <IconBoard />
      <h3 key={children}>{children}</h3>
    </StyledBoardLink>
  );
};
const StyledBoardLink = styled.a`
  display: flex;
  padding: 14px 24px;
  border-radius: 0px 100px 100px 0px;
  gap: 12px;
  width: calc(100% - 24px);
  color: ${({ theme }) => theme.mediumGrey};
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.mainPurple};
    color: ${({ theme }) => theme.white};
    > svg > path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;
