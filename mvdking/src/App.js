import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBAr";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/aboutUs";
import Contact from "./Components/Contact/Contact";
import Welcome from "./Components/Welcome/Welcome"

import './App.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
