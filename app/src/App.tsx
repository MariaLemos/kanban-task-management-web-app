import styled from "styled-components";
import { AppProvider } from "./AppProvider";
import { Button } from "./commons/button";
import { CheckListItem } from "./commons/checkListItem";
import { DropDown } from "./commons/dropdown";
import { Input } from "./commons/input";
import { Header } from "./components/header/header";
import { SideBarWrapper } from "./components/sidebar/sidebar.wrapper";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppWrapper>
        <SideBarWrapper />
        <Header />
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
          <CheckListItem isDone={true} label={"teste"} onChange={() => {}} />
        </Main>
      </AppWrapper>
    </AppProvider>
  );
}
const AppWrapper = styled.div`
  color: ${({ theme }) => theme.main?.fontColor};
  background-color: ${({ theme }) => theme.main.bg};
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 260px 1fr;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "aside header"
      "aside main";
  }
  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
`;

const Main = styled.main`
  grid-area: main;

  width: 100%;
  padding: 10%;
  background-color: ${({ theme }) => theme.main.bg};
`;
export default App;
