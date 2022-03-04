import React, { useState, useEffect } from "react";
// import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CoinInfo from "./CoinInfo";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch("api/nlg")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      }); // re-direct to login on successful register
  }, []);

  function handleClick(symbol) {
    // let navigate = useNavigate();
    // history.push(`/${symbol}`);
    navigate(`/${symbol}`);
  }

  return (
    <div>
      <br />
      <Typography variant="h4" component="h2" className="heading">
        Crypto Dashboard
      </Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 180,
            height: 180,
          },
        }}
      >
        {data.map((item) => (
          <Paper key={item.symbol} elevation={3} className="coinCard" onClick={async (event) => {
            navigate(`${item.symbol}`, { state: { symbol: item.symbol } });
          }}>
            <div className="coinName">{item.name}</div>
            <div className="coinSymbol">{item.symbol}</div>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default DashBoard;
