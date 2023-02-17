import styled from "styled-components";
import { ReactComponent as IconAdd } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as LogoMobile } from "../../assets/logo-mobile.svg";
import { Button } from "../../commons/button";
import useIsMobile from "../../helpers/useIsMobile";
export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <StyledHeader>
      {isMobile && <LogoMobile />}
      <h2>Platform Launch</h2>
      <Button variant="primary" size="small">
        <IconAdd />
      </Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: ${({ theme }) => theme.darkGrey};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
