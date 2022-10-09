// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
// import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
