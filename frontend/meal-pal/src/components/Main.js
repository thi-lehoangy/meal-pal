import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../routes/Home";
import Forms from "../routes/Forms";
import App from "./App";


function Main() {
    return(<div className = "main">
        This is main
        {/* <Router>
            <Route path='/' element={<h1>Home Page Component</h1>} />
            <Route path='/login' element={<h1>Login Page Component</h1>} />
        </Router> */}
        {/* <Routes>
            <Route path="/" component={Home}>
                <Route path="/Home" component={Home} />
                <Route path="/Forms" component={Forms} />
            </Route>
        </Routes> */}
    </div>
    )
}

export default Main;