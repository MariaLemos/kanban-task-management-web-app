import styled from "styled-components";
import { useShowSideBar } from "../../AppContext";
import { ThemeToggle } from "../themeToggle/themeToggle";

export const SideBar: React.FC = () => {
  const { showSideBar, setShowSideBar } = useShowSideBar();
  return showSideBar ? (
    <StyledSidebar>
      <ThemeToggle />
    </StyledSidebar>
  ) : null;
};

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.aside.bg};
  padding: 1rem;
`;
