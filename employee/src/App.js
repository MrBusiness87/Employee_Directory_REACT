import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// this line renames BrowserRouter as Router
import NavTabs from "./components/NavTabs";
import Main from "./components/pages/Main";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Main} />
        <Route exact path="/Discover" component={Discover} />
        <Route exact path="/Search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
