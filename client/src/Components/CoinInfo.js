import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import CandleStickChartWithRSIIndicator from "./CandleStickChartWithRSIIndicator";
import { getData } from "../utils/getData" 

const CoinInfo = () => {
  const symbol = window.location.href.split("/").slice(-1)[0];
  const lang = window.location.href.split("/").slice(-2)[0];
  const [data, setData] = useState({});

  const [chartData, setChartData] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(`api/nlg/${symbol}?lang=${lang}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
        setChartData(getData(response.json.history24h));
      }); // re-direct to login on successful register
  }, []);

  return (
    (
      <div>
        <br />
        {data.nlg &&  chartData.length ? (
          <div>
            <br />
            <Typography variant="h4" component="h2" className="heading">
              {data.json.coinInfo.name} ({data.json.coinInfo.symbol})
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
              <br />
              <CandleStickChartWithRSIIndicator data={chartData} type="hybrid" />
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
