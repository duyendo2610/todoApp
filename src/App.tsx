import MainWeb from "./page/App/MainWeb";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./page/Login/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Main" element={<MainWeb/>}/>
      </Routes>
    </div>
  );
}

export default App;
