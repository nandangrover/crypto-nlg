import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import CoinInfo from "./Components/CoinInfo";
import Container from "@mui/material/Container";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Container maxWidth="lg" className="dashboard">
        <Route exact path="/" component={DashBoard} />
        <Route path="/:id" component={CoinInfo} />
      </Container>
    </div>
  </Router>
);

export default App;
