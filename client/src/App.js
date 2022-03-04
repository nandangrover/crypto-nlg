import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import CoinInfo from "./Components/CoinInfo";
import Documentation from "./Components/Documentation";
import Container from "@mui/material/Container";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Container maxWidth="lg" className="dashboard">
        <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/:id" element={<CoinInfo />} />
        <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Container>
    </div>
  </Router>
);

export default App;
