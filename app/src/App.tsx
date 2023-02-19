import styled from "styled-components";
import { AppProvider } from "./AppProvider";
import { CheckListItem } from "./commons/checkListItem";
import { DropDown } from "./commons/dropdown";
import { Input } from "./commons/input";
import { HeaderComponent } from "./components/header/header.component";
import { ShowSideBarButton } from "./components/showSideBarButton/showSideBarButton";
import { SideBarContainer } from "./components/sidebar/sidebar.container";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppWrapper>
        <SideBarContainer />
        <HeaderComponent />
        <Main>
          <Input
            label="teste"
            placeholder="type a things"
            errorMessage="cant be empty"
          />
          <DropDown label={"status"} optionNames={["doing", "todo"]} />
          <CheckListItem isDone={true} label={"teste"} onChange={() => {}} />
          <ShowSideBarButton />
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
    grid-template-columns: min-content 1fr;
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
