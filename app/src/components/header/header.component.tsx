import styled from "styled-components";
import { ReactComponent as IconAdd } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as LogoMobile } from "../../assets/logo-mobile.svg";
import { Button } from "../../commons/button";
import useIsMobile from "../../helpers/useIsMobile";
import { ContextMenuComponent } from "../contextMenu/contextMenu.component";
import { PageTitleComponent } from "./pageTitle.component";

export const HeaderComponent: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Header>
      {isMobile && <LogoMobile />}

      <PageTitleComponent />
      <StyledButton variant="primary" size="small" onClick={console.log}>
        <IconAdd />
      </StyledButton>
      <ContextMenuComponent
        editAction={console.log}
        contextName="board"
        deleteAction={() => {}}
      />
    </Header>
  );
};

const Header = styled.header`
  padding: 1.33rem;
  background-color: ${({ theme }) => theme.default.bg};

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
