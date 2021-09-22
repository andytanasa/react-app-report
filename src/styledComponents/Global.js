import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background-color: ${({ theme }) => theme.neutral.veryDarkBlue};
    font-family: 'Rubik', sans-serif;
    ul, li {
        padding: 0;
        margin: 0;
    }
    h2, h4, h5, button {
        margin: 0;
        padding: 0
    }
}


`;
