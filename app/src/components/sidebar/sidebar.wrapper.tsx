import styled, { useTheme } from "styled-components";
import { useShowSideBar } from "../../AppContext";
import useIsMobile from "../../helpers/useIsMobile";
import { SideBar } from "./sidebar";
import { ReactComponent as HideSideBarIcon } from "../../assets/icon-hide-sidebar.svg";
import { Modal } from "../../commons/modal";

export const SideBarWrapper: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const isMobile = useIsMobile();
  const theme = useTheme() as Theme;
  const Logo = theme.logo;

  if (isMobile) {
    return (
      <Modal
        onClose={() => {
          setShowSideBar(false);
        }}
      >
        <SideBar />
      </Modal>
    );
  }
  if (!showSideBar) {
    return null;
  }

  return (
    <SideBarContainer>
      <Logo />
      <SideBar />
      <HideButton onClick={() => setShowSideBar(false)}>
        <HideSideBarIcon /> Hide Sidebar
      </HideButton>
    </SideBarContainer>
  );
};
const SideBarContainer = styled.aside`
  max-width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.aside.bg};
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
