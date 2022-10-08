import "./AboutMe.css";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { DiJavascript, DiReact } from "react-icons/di";
import { SiMysql, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

import me from "./me.png";

export default function AboutMe() {
  return (
    <div className="containerAboutMe">
      <img className="profile" src={me} alt="Jordan Laczkowski"></img>
      <p>Welcome!</p>
      <p>I am a current student in DU's Full Stack Web Development Bootcamp.</p>
      <h2>Technologies and Languages</h2>
      <div className="reactIcons">
        <div className="appIcon">
          <TiHtml5 className="icon" />
          HTML5
        </div>
        <div className="appIcons">
          <TiCss3 className="icon" />
          CSS
        </div>
        <div className="appIcons">
          <DiJavascript className="icon" />
          JavaScript
        </div>
        <div className="appIcons">
          <SiMysql className="icon" />
          MySQL
        </div>
        <div className="appIcons">
          <SiNodedotjs className="icon" />
          Node
        </div>
        <div className="appIcons">
          <SiExpress className="icon" />
          Express
        </div>
        <div className="appIcons">
          <SiMongodb className="icon" />
          MongoDB
        </div>
        <div className="appIcons">
          <DiReact className="icon" />
          React
        </div>
      </div>
    </div>
  );
}
