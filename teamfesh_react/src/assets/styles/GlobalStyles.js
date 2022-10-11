import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}
body{
    background-color:navy;
    min-width:1210px;
    max-width: 2000px;
    margin: 0px auto;
    font-family: 'Pretendard';
    color:#fff;
}
div {
    display:block;
}
a{
  text-decoration: none;
}
`;

export default GlobalStyle;
