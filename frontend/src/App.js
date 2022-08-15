import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import BecomeMember from "./pages/BecomeMember/BecomeMember.js";
import Error from "./pages/Error/Error.js";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/become-a-member" element={<BecomeMember/>}></Route>
            <Route exact path="/error" element={<Error></Error>}></Route>
            <Route path="*" element={<Error/>}/> 
        </Routes>
  );
}

export default App;
