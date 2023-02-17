import styled from "styled-components";
import { ReactComponent as IconAdd } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as LogoMobile } from "../../assets/logo-mobile.svg";
import { Button } from "../../commons/button";
import useIsMobile from "../../helpers/useIsMobile";
import { ContextMenu } from "../contextMenu/contextMenu";
import { PageTitle } from "./pageTitle";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <StyledHeader>
      {isMobile && <LogoMobile />}

      <PageTitle />
      <StyledButton variant="primary" size="small" onClick={console.log}>
        <IconAdd />
      </StyledButton>
      <ContextMenu
        editAction={console.log}
        contextName="board"
        deleteAction={() => {}}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1.33rem;
  background-color: ${({ theme }) => theme.aside.bg};

  width: 100%;
  display: grid;
  grid-gap: 1.3rem;
  align-items: center;
  grid-template-columns: 2rem 1fr 4rem 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 4rem 1rem;
  }
  @media (min-width: 1000px) {
    padding: 1.5rem;
  }
`;
const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    max-height: 2.6rem;
    padding: 0;
  }
`;
