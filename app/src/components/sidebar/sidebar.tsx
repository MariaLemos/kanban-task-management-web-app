import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export const SideBar: React.FC<{
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
}> = ({ setTheme }) => {
  return <StyledSidebar></StyledSidebar>;
};

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.default.bg};
`;
