
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './component/Home/AboutMe/AboutMe';
import Contact from './component/Home/Contact/Contact';
import Home from './component/Home/Home';
import Projects from './component/Home/Projects/Projects';
import Navbar from './component/Navbar/Navbar';
import './index.css'


function App() {
  return (
    <div className=" ">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<AboutMe></AboutMe>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

