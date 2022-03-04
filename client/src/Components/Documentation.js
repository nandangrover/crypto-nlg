import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
// import axios from "axios";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import ReactMarkdown from "react-markdown";
// import Paper from "@mui/material/Paper";

const Documentation = () => {
  //   const symbol = window.location.href.split("/").slice(-1)[0];
  const [data, setData] = useState({});
  //   // Similar to componentDidMount and componentDidUpdate:
  //   useEffect(() => {
  //     fetch(`api/nlg/${symbol}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((response) => {
  //         setData(response);
  //       }); // re-direct to login on successful register
  //   }, []);

  return (
    console.log(data),
    (
      <div>
        <br />
        {true ? (
          <div>
            <br />
            <Typography variant="h4" component="h2" className="heading">
              Documentation
            </Typography>
            <br />
            <ReactMarkdown># Crypto NLG on Alexa devices</ReactMarkdown>
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <Footer />
      </div>
    )
  );
};

export default Documentation;
