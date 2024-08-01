import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import PrivateRoutes from "./component/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
