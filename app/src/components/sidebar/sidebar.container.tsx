import styled, { useTheme } from "styled-components";
import { useShowSideBar } from "../../AppContext";
import useIsMobile from "../../helpers/useIsMobile";
import { SideBarComponent } from "./sidebar.component";
import { ReactComponent as HideSideBarIcon } from "../../assets/icon-hide-sidebar.svg";
import { Modal } from "../../commons/modal";

export const SideBarContainer: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const isMobile = useIsMobile();
  const theme = useTheme() as Theme;
  const Logo = theme.logo;
  if (!showSideBar) {
    return null;
  }

  if (isMobile) {
    return (
      <Modal
        onClose={() => {
          setShowSideBar(false);
        }}
      >
        <SideBarComponent />
      </Modal>
    );
  }

  return (
    <SideBar>
      <Logo />
      <SideBarComponent />
      <HideButton onClick={() => setShowSideBar(false)}>
        <HideSideBarIcon /> Hide Sidebar
      </HideButton>
    </SideBar>
  );
};
const SideBar = styled.aside`
  max-width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.default.bg};
  border-right: 1px solid ${({ theme }) => theme.line};
  padding: 2rem 0;
  display: grid;
  grid-template-rows: min-content 1fr min-content min-content;
  > svg {
    margin: 0 2rem;
    margin-bottom: 52px;
  }
`;

const HideButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
`;
