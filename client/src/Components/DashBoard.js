import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";

const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/nlg", userData)
    .then(res => history.push("/privateroute/avadakedavara/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

class DashBoard extends Component {
  render() {
    return (
      <div className="App">
        "Hello"
      </div>
    );
  }
}

export default DashBoard;
