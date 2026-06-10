import { BrowserRouter, Routes, Route } from "react-router-dom";

import Campaigns from "./pages/Campaigns";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/construction" element={<UnderConstruction />}/>
        <Route path="/home" element={<Home />}
        
        
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;