import styled from "styled-components";
import { AppProvider } from "./AppProvider";
import { Button } from "./commons/button";
import { CheckListItem } from "./commons/checkListItem";
import { DropDown } from "./commons/dropdown";
import { Input } from "./commons/input";
import { Header } from "./components/header/header";
import { SideBar } from "./components/sidebar/sidebar";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <SideBar />
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
    </AppProvider>
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
