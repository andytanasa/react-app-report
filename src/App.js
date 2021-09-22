import { GlobalStyles } from "./styledComponents/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/theme";
import MainCard from "./components/MainCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainCard />
    </ThemeProvider>
  );
}

export default App;
