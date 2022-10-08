import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";

//

export default function NavBar() {
  return (
    <nav className="containerNavBar">
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
    </nav>
  );
}

<h1>Jordan Laczkowski</h1>;
