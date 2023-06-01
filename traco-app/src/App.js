import React from "react";
import { RoutesApp } from "./routes";
import { theme } from "./global/theme";
import { GlobalStyle } from "./pages/SignIn/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesApp/>
    </div>
  );
}

export default App;
