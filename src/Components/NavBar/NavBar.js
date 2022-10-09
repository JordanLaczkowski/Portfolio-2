import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";

const showLinks = (e) => {
  e.preventDefault();
  const link = document.getElementById("linksNav");
  if (link.style.display === "flex") {
    link.style.display = "none";
  } else {
    link.style.display = "flex";
  }
};

export default function NavBar() {
  return (
    <nav className="containerNavBar">
      <div className="navBar-Container Container">
        <a href="" className="iconNav" onClick={showLinks}>
          <FaHamburger />
        </a>
        {/* <div>
        <h1>Jordan Laczkowski</h1>
      </div> */}
        <ul>
          <li>
            <a className="navBtn" href="/AboutMe">
              About Me
            </a>
          </li>
          <li>
            <a className="navBtn" href="/Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="navBtn" href="/ContactMe">
              Contact Me
            </a>
          </li>
          <li>
            <a className="navBtn" href="/Resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
