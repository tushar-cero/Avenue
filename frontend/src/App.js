import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.js";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/home" element={<Home></Home>}></Route>
      {/*
            <Route exact path="/error" element={<Error></Error>}></Route>
            <Route path="*" element={<Error/>}/> */}
    </Routes>
  );
}

export default App;
