import { Routes, Route, Link } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to DIRS</h1>
      <Routes>
        <Route path="splash" element={<Splash />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
