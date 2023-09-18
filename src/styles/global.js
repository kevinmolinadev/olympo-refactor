import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        box-sizing:border-box;
        font-family:sans-serif;
        margin:0;
        padding:0;
        transition:color, background-color;
        transition-duration:500ms;
        transition-timing-function:ease-in-out
    }
`
export default GlobalStyle;