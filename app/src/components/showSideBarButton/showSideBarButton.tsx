import styled from "styled-components";
import { useShowSideBar } from "../../AppContext";
import useIsMobile from "../../helpers/useIsMobile";
import { ReactComponent as ShowSideBarIcon } from "../../assets/icon-show-sidebar.svg";
import { Button } from "../../commons/button";

export const ShowSideBarButton: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const isMobile = useIsMobile();

  if (isMobile || showSideBar) {
    return null;
  }

  return (
    <ShowButton size="large" onClick={() => setShowSideBar(true)}>
      <ShowSideBarIcon />
    </ShowButton>
  );
};

const ShowButton = styled(Button)`
  background-color: ${({ theme }) => theme.mainPurple};
  border: none;

  border-radius: 0px 100px 100px 0px;
  position: fixed;
  left: 0;
  bottom: 2rem;
`;
