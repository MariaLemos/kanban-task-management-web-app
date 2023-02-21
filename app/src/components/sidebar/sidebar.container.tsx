import styled, { useTheme } from "styled-components";
import { useShowSideBar } from "../../AppContext";
import useIsMobile from "../../helpers/useIsMobile";
import { SideBarComponent } from "./sidebar.component";
import { ReactComponent as HideSideBarIcon } from "../../assets/icon-hide-sidebar.svg";
import { useModal } from "../../commons/modal/modal.Provider";
import { useEffect } from "react";

export const SideBarContainer: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  const { openModal } = useModal();
  const isMobile = useIsMobile();
  const theme = useTheme() as Theme;
  const Logo = theme.logo;

  useEffect(() => {
    if (isMobile && showSideBar) {
      openModal(
        {
          onCloseModal: () => {
            setShowSideBar(false);
          },
        },
        <SideBarComponent />
      );
    }
  }, [isMobile, showSideBar, openModal, showSideBar]);

  if (!showSideBar || isMobile) {
    return null;
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
  width: 260px;

  height: 100vh;
  background-color: ${({ theme }) => theme.default.bg};
  border-right: 1px solid ${({ theme }) => theme.line};
  padding: 2rem 0;
  display: grid;
  position: relative;
  grid-template-rows: min-content 1fr min-content min-content;
  @media (min-width: 1000px) {
    width: 300px;
  }
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
