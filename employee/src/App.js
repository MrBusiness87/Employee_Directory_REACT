import React from "react";
import Main from "./components/Main";

function App() {
  const appstyle = {
    backgroundColor: "darkslategray",
    color: "white",
  };
    
  return (
    <div className="App" style={appstyle}>
      <Main />
    </div>
  );
}

export default App;