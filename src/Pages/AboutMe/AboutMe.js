import "./AboutMe.css";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { DiJavascript, DiReact, DiNpm } from "react-icons/di";
import {
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

import me from "./me.png";

export default function AboutMe() {
  return (
    <div className="containerAboutMe">
      <div>
        <h1>Welcome to Jordan Laczkowski's React Portfolio!</h1>
        <img className="profile" src={me} alt="Jordan Laczkowski"></img>
      </div>
      <div className="welcomeBlock">
        <p>
          🔭 I'm currently in school at DU in their Full Stack Web Development.
        </p>
      </div>

      <h3>Technologies and Languages</h3>
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
        <div className="appIcons">
          <SiBootstrap className="icon" />
          Bootstrap
        </div>
        <div className="appIcons">
          <DiNpm className="icon" />
          NPM
        </div>
      </div>
    </div>
  );
}
