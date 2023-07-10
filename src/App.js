import React from "react";
import { GlobalStyle } from "./pages/SignIn/styles";
import { RoutesApp } from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesApp/>
    </div>
  );
}

export default App;
