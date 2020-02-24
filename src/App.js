import React from "react";

import {BrowserRouter as Router } from 'react-router-dom'

import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';

import Layout from './components/Layout'


function App() {
  

  return (
    <Router >
      <Layout />
    </Router>
  
  );
}

export default App;
