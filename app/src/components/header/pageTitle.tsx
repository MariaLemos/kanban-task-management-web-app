import styled from "styled-components";
import { useShowSideBar } from "../../AppContext";
import { ReactComponent as ArrowUp } from "../../assets/icon-chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icon-chevron-down.svg";
import useIsMobile from "../../helpers/useIsMobile";

export const PageTitle: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const isMobile = useIsMobile();

  const getArrow = () => (showSideBar ? <ArrowUp /> : <ArrowDown />);
  return (
    <StyledPageTitle
      onClick={() => {
        if (isMobile) {
          setShowSideBar(!showSideBar);
        }
      }}
    >
      <h2>Platform Launch</h2>
      {isMobile && getArrow()}
    </StyledPageTitle>
  );
};

const StyledPageTitle = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.titleColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
