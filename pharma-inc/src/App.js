import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>PHARMA INC</h1>
    </div>
  );
}

export default App;
