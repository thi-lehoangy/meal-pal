import './App.css';
import { Route, Routes, BrowserRouter, createBrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

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
