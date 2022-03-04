import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
// import axios from "axios";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";

const CoinInfo = () => {
  const symbol = window.location.href.split("/").slice(-1)[0];
  const [data, setData] = useState({});
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(`api/nlg/${symbol}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      }); // re-direct to login on successful register
  }, []);

  return (
    console.log(data),
    (
      <div>
        <br />
        {data.nlg ? (
          <div>
          <Typography
            variant="h4"
            component="h2"
            className="heading"
            align="center"
          >
            {data.json.coinInfo.name}
          </Typography>
          <div className="summary">
            {data.nlg.summary}
          </div>
          </div>
        ) : (
          <div></div>
        )}
        <br />
      </div>
    )
  );
};

export default CoinInfo;
