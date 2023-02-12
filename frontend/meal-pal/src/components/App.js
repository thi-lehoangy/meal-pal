import './App.css';
import { Route, Routes, BrowserRouter, createBrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import 'react-big-calendar/dist/calendar-tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Header from './components/Header';
import Forms from './routes/Forms';
import Calender from './routes/Calender';
import CalenderUI from './routes/CalenderUI';
import './index.css';


function App() {
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
      path: 'calender',
      element: <Calender />
    },
    {
      path: 'test-calender',
      element: <CalenderUI />
    }
  ]);
  
  return (

    <div>
      <Header/>
      <Main/>
      <Footer/>
      {/* <>
        <BrowserRouter>
          <Route path ="/" element={<Main />} />
          <Route path ="gigs" element={<Footer />} />
        </BrowserRouter>
      </> */}
    </div>
  )
}

export default App;
