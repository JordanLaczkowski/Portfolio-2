import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
// import AboutMe from "./Pages/AboutMe/AboutMe";
// import ContactMe from "./Pages/ContactMe/ContactMe";
// import Portfolio from "./Pages/Portfolio/Portfolio";
// //add resume
// import { useState } from "react";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   const [currentPage, setCurrentPage] = useState("AboutMe");
//   function render() {
//     console.log("before checking");
//     if (currentPage === "Portfolio") {
//       console.log("portfolio checking");
//       return <Portfolio />;
//     } else if (currentPage === "ContactMe") {
//       console.log("contact me checking");
//       return <ContactMe />;
//     }
//     // else if (currentPage === "Resume") {
//     //   return <Resume />;
//     // }
//   }
//   return (
//     <>
//       <NavBar setCurrentPage={setCurrentPage} />
//       <div className="renderedData">{render()}</div>
//       <Footer />
//     </>
//   );
// }

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
