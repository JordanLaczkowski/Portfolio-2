import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="https://jordanlaczkowski.github.io/Portfolio-2/"
            element={<AboutMe />}
          />
          <Route path="/" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
