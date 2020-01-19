import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Page from "./components/layout/Page";
import "./App.scss";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Page />
    </div>
  </Router>
);

export default App;
