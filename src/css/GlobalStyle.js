import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{
  height:200%;
  // background:black;
};

body{
  padding: 0;
  margin: 0;
  height:200%;
  overflow-x:hidden;
  overflow-y:auto;
}
`;

export default GlobalStyle;