import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>video cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
