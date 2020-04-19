import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Home from "./components/home/Index";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
