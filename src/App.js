import { GlobalStyles } from "./styledComponents/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/theme";
import MainCard from "./components/MainCard";
import {
  Container,
  Container1,
  Container2,
} from "./styledComponents/Container.styled";
import { content } from "./content";
import Card from "./components/Card";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Container1>
          <MainCard />
        </Container1>
        <Container2>
          {content.map((item, index) => (
            <Card key={index} item={item} color={theme.primary} />
          ))}
        </Container2>
      </Container>
    </ThemeProvider>
  );
}

export default App;
