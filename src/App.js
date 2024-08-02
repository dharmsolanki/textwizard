import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import PrivateRoutes from "./component/PrivateRoutes";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/user" element={<PrivateRoutes />}>
            <Route exact path="home" element={<Home />} />
            <Route exact path="about" element={<About />} />
          </Route>
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
