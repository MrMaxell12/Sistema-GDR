import { BrowserRouter, Routes, Route } from "react-router-dom";

import Campaigns from "./pages/Campaigns";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;