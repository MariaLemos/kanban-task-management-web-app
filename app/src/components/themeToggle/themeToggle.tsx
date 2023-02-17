import styled from "styled-components";
import { useThemeName } from "../../AppContext";
import { ReactComponent as LightThemeIcon } from "../../assets/icon-light-theme.svg";
import { ReactComponent as DarkThemeIcon } from "../../assets/icon-dark-theme.svg";
import { Toggle } from "../../commons/toggle";

export const ThemeToggle: React.FC = () => {
  const { themeName, setThemeName } = useThemeName();
  return (
    <StyledThemeToggle>
      <LightThemeIcon />
      <Toggle
        isChecked={themeName === "dark"}
        onChange={(isChecked) => setThemeName(isChecked ? "dark" : "light")}
      />
      <DarkThemeIcon />
    </StyledThemeToggle>
  );
};

const StyledThemeToggle = styled.div`
  background-color: ${({ theme }) => theme.main.bg};
  padding: 14px;
  display: flex;
  gap: 24px;
  justify-content: center;
  border-radius: 6px;
  margin: 1rem;
`;
