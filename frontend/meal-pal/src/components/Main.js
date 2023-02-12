import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../routes/Home";
import Forms from "../routes/Forms";


function Main() {
    return(<div className = "main">
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Forms" component={Forms} />
        </Routes>
    </div>
    )
}

export default Main;