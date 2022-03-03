import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CoinInfo from "./CoinInfo";
import Typography from "@mui/material/Typography";

// const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/nlg")
//     .then(res => history.push("/privateroute/avadakedavara/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

const DashBoard = () => {
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get("/api/nlg").then((res) => setData(res.data)); // re-direct to login on successful register
  }, []);

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
          <Paper key={item.symbol} elevation={3} className="coinCard">
            <div className="coinName">{item.name}</div>
            <div className="coinSymbol">{item.symbol}</div>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default DashBoard;
