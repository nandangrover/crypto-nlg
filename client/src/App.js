import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from 'react-redux';
import DashBoard from './Components/DashBoard';
import PropTypes from "prop-types";


const App = () => (
  // <Provider store={store}>
    <Router>
      <div>
        {/* <AppNavBar /> */}
        <Route exact path="/" component={DashBoard} />
        {/* <Route exact path="/App" component={App} /> */}
      </div>
    </Router>
  // </Provider>
);


export default App;
