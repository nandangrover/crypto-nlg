import React from 'react';
import Typography from "@mui/material/Typography";
// import { Link } from 'memfs/lib/node';
// import { Link } from "react-router-dom";
// import { fontSize } from '@mui/material/node_modules/@mui/system';
// import './styles.scss';

const Footer = () => {
  return (
    <div className="footer-main">
    <div className="copyright">
    <Typography style={{padding: '0px'}} variant="body2" className="footerText" color="textPrimary" align="center">
         <br/>
         <br/>
      {'Copyright © '}
      <a rel="noopener noreferrer" color="inherit" href="/">
        Crypto NLG
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
    </div>
    <div className="footer">
    <div className="footer-left">
    <Typography style={{padding: '20px'}} variant="body2" className="footerText" color="textPrimary" align="center">
         <br/>
         <br/>
      <a rel="noopener noreferrer" color="inherit" href="/">
      Crypto Dashboard
      </a>
    </Typography>
    </div>
    <div className="footer-right">
    <Typography style={{padding: '20px'}} variant="body2" className="footerText" color="textPrimary" align="center">
         <br/>
         <br/>
      <a rel="noopener noreferrer" color="inherit" href="/documentation">
        Documentation
      </a>
    </Typography>
    </div>
    </div>
    </div>
  );
};

export default Footer;