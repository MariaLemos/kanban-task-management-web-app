import styled from "styled-components";
import { AppProvider } from "./AppProvider";
import { ModalProvider } from "./commons/modal/modal.Provider";
import { BoardContainer } from "./components/board/board.container";
import { HeaderComponent } from "./components/header/header.component";
import { ShowSideBarButton } from "./components/showSideBarButton/showSideBarButton";
import { SideBarContainer } from "./components/sidebar/sidebar.container";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <AppProvider>
      <ModalProvider>
        <GlobalStyle />
        <ShowSideBarButton />
        <AppWrapper>
          <SideBarContainer />
          <HeaderComponent />
          <Main>
            <BoardContainer />
          </Main>
        </AppWrapper>
      </ModalProvider>
    </AppProvider>
  );
}
const AppWrapper = styled.div`
  color: ${({ theme }) => theme.main?.fontColor};
  background-color: ${({ theme }) => theme.main.bg};
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "aside header"
      "aside main";

    header {
      grid-area: header;
    }
    aside {
      grid-area: aside;
    }
  }
  h1,
  h2 {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const Main = styled.main`
  grid-area: main;
  overflow: scroll;
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.main.bg};
  color: ${({ theme }) => theme.main.fontColor};
`;
export default App;
