import React from "react";


import Home from "../routes/Home";
import Forms from "../routes/Forms";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}


// function Main() {
//     return(<div>
//                <Route path="/" element={<Home />} />
//         <Route path="Home" element={<Home />} />
//         <Route path="Forms" element={<Forms />} /> 

//         </div>
//     )
// }


export default App;