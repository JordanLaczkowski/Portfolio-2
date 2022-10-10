import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Jordan Laczkowski
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav nav-item">
            <Link to={{ pathname: "/aboutme" }}>
              <li>About Me</li>
            </Link>
            <Link to={{ pathname: "/portfolio" }}>
              <li>Portfolio</li>
            </Link>
            <Link to={{ pathname: "/contactme" }}>
              <li>Contact Me</li>
            </Link>
            <Link to={{ pathname: "/resume" }}>
              <li>Resume</li>
            </Link>
            {/* <Link to={{ pathname: "/portfolio" }}>
              <li className="nav-item nav-link"></li>
              <li className="nav-item">
                <a className="nav-link" href="/contactme">
                  Contact Me
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a class="nav-link" href="/resume">
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
// const showLinks = (e) => {
//   e.preventDefault();
//   const link = document.getElementById("linksNav");
//   if (link.style.display === "flex") {
//     link.style.display = "none";
//   } else {
//     link.style.display = "flex";
//   }
// };

// export default function NavBar()
//{
//   return (
//     <nav className="">
//       <FaHamburger className="iconNavHB" />

//       <div className="containerNavBar">
//         <div className="navBar-Container Container">
//           <a href="" className="iconNav" onClick={showLinks}></a>
//           {/* <div>
//         <h1>Jordan Laczkowski</h1>
//       </div> */}
//           <ul>
//             <li>
//               <a className="navBtn" href="/AboutMe">
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a className="navBtn" href="/Portfolio">
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a className="navBtn" href="/ContactMe">
//                 Contact Me
//               </a>
//             </li>
//             <li>
//               <a className="navBtn" href="/Resume">
//                 Resume
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
