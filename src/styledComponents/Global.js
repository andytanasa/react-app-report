import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background-color: ${({ theme }) => theme.neutral.veryDarkBlue};
    ul {
        padding: 0
    }
    h2, h4 {
        margin: 0;
        padding: 0
    }
}


`;
