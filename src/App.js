import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
