import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import ContactMe from "./Pages/ContactMe/ContactMe";
// import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
