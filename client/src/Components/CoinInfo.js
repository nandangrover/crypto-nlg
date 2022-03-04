import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
// import axios from "axios";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
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
            <br />
            <Typography variant="h4" component="h2" className="heading">
              {data.json.coinInfo.name}
            </Typography>
            <br />
            <div className="coininfo-container">
              <div className="summary">
                <div className="coininfo-heading">Summary</div>
                <br />
                {data.nlg.summary}
              </div>
              <br />
              <div className="sentiment">
                <div className="coininfo-heading">Sentiment</div>
                <br />
                {data.nlg.sentiment}
              </div>
              <br />

              <div className="technical">
                <div className="coininfo-heading">Technical</div>
                <br />
                {data.nlg.technical}
              </div>
              <br />
              <div className="recommendation">
                <div className="coininfo-heading">Recommendation</div>
                <br />
                {data.nlg.recommendation}
              </div>
            </div>
            <Footer />
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
