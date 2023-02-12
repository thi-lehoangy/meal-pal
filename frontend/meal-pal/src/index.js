import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import './index.css';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router>
  <App />
  </Router>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

