import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./commons/button";
import { CheckListItem } from "./commons/checkListItem";
import { DropDown } from "./commons/dropdown";
import { Input } from "./commons/input";
import GlobalStyle, { SchemeColors } from "./GlobalStyles";
import { themeMap } from "./Themes";

function App() {
  const userPrefenceByBrowser = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState<"light" | "dark">(userPrefenceByBrowser);
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={themeMap[theme]}>
        <Main theme={theme}>
          <Button variant="primary" size="small">
            teste
          </Button>
          <Button variant="secondary" size="small">
            teste
          </Button>
          <Button variant="destructive" size="small">
            teste
          </Button>
          <Input
            label="teste"
            placeholder="type a things"
            errorMessage="cant be empty"
          />
          <DropDown label={"status"} optionNames={["doing", "todo"]} />
          <CheckListItem isDone={true} label={"teste"} />
        </Main>
      </ThemeProvider>
    </div>
  );
}
const Main = styled.main<{ theme: string }>`
  height: 100vh;
  width: 100%;
  padding: 5%;
  background-color: ${({ theme }) =>
    theme === "light" ? SchemeColors.lightBg : SchemeColors.darkBg};
`;
export default App;
