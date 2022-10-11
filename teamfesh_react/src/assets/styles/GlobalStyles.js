import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}
body{
    background-color:gray;
    min-width:1210px;
    max-width: 2000px;
    padding: 0;
    margin: 0;
    font-family: 'Pretendard';
    font-size:14px;
    color:#fff;
}

a{
  text-decoration: none;
  color: inherit;
}
`;  

export default GlobalStyle;
