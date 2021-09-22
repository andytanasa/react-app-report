import { GlobalStyles } from "./styledComponents/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/theme";
import MainCard from "./components/MainCard";
import { Container } from "./styledComponents/Container.styled";
import { content } from "./content";
import Card from "./components/Card";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <MainCard />
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
