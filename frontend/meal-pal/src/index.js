import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Header from './components/Header';
import Forms from './routes/Forms';
import Calendar from './routes/Calendar';

import './index.css';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Home />
  },
  {
      path: 'header',
      element: <Header />
  },
  {
    path: 'forms',
    element: <Forms />
  },
  {
    path: 'calendar',
    element: <Calendar />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);

// ReactDOM.render(<Router>
//   <App />
//   </Router>,
//   document.getElementById('root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
