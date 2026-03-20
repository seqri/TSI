import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route> 


        </Routes>
        <Footer></Footer>

      </BrowserRouter>

    </>
  );
}

export default App;
