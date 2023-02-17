import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./commons/button";
import { CheckListItem } from "./commons/checkListItem";
import { DropDown } from "./commons/dropdown";
import { Input } from "./commons/input";
import { Header } from "./components/header/header";
import { SideBar } from "./components/sidebar/sidebar";
import GlobalStyle from "./GlobalStyles";
import { themeMap } from "./Themes";

function App() {
  const userPrefenceByBrowser = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState<"light" | "dark">(userPrefenceByBrowser);
  return (
    <ThemeProvider theme={themeMap[theme]}>
      <AppWrapper>
        <GlobalStyle />

        <Header />
        <SideBar setTheme={setTheme} />
        <Main>
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
      </AppWrapper>
    </ThemeProvider>
  );
}
const AppWrapper = styled.div`
  color: ${({ theme }) => theme.main?.fontColor};
`;

const Main = styled.main`
  height: 100vh;
  width: 100%;
  padding: 5%;
  background-color: ${({ theme }) => theme.default.bg};
`;
export default App;
