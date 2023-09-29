import MainWeb from "./page/App/MainWeb";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./page/Login/Login";
import { Route, Routes } from "react-router-dom";

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
