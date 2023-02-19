import styled, { useTheme } from "styled-components";
import { ReactComponent as IconAdd } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as LogoMobile } from "../../assets/logo-mobile.svg";
import { Button } from "../../commons/button";
import useIsMobile from "../../helpers/useIsMobile";
import { ContextMenuBoardComponent } from "./contextMenuBoard.component";
import { PageTitleComponent } from "./pageTitle.component";

export const HeaderComponent: React.FC = () => {
  const isMobile = useIsMobile();
  const theme = useTheme() as Theme;
  return (
    <Header>
      {isMobile ? (
        <LogoMobile />
      ) : (
        <LogoDesk>
          <theme.logo />
        </LogoDesk>
      )}

      <PageTitleComponent />
      <StyledButton variant="primary" size="small" onClick={console.log}>
        {isMobile ? <IconAdd /> : "+ Add New Task"}
      </StyledButton>
      <ContextMenuBoardComponent />
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
  grid-template-columns: 2rem 1fr auto 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 18rem auto minmax(auto, 200px) 1rem;
  }
  @media (min-width: 1000px) {
    padding: 1.5rem;
  }
`;
const LogoDesk = styled.div`
  border-right: 1px solid ${({ theme }) => theme.line};
`;
const StyledButton = styled(Button)`
  @media (max-width: 768px) {
    max-height: 2.6rem;
    padding: 0;
  }
`;
