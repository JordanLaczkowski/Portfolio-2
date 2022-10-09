// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import ContactMe from "./Pages/ContactMe/ContactMe";
// import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      {/* <Resume /> */}
      <Footer />
    </div>
  );
}

export default App;
