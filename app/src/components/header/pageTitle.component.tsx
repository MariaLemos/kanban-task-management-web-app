import styled from "styled-components";
import { useShowSideBar } from "../../AppContext";
import { ReactComponent as ArrowUp } from "../../assets/icon-chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icon-chevron-down.svg";
import useIsMobile from "../../helpers/useIsMobile";

export const PageTitleComponent: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const isMobile = useIsMobile();

  const getArrow = () => (showSideBar ? <ArrowUp /> : <ArrowDown />);
  return (
    <PageTitle
      onClick={() => {
        if (isMobile) {
          setShowSideBar(!showSideBar);
        }
      }}
    >
      <h2>Platform Launch</h2>
      {isMobile && getArrow()}
    </PageTitle>
  );
};

const PageTitle = styled.div`
  background-color: transparent;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
