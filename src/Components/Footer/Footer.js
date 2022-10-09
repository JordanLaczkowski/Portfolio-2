import "./Footer.css";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <div className="containerFooter">
      <a
        href="https://github.com/JordanLaczkowski"
        target="_blank"
        className="linkFooter"
      >
        <SiGithub className="iconFooter" />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-laczkowski-30065a195/"
        target="_blank"
        className="linkFooter"
      >
        <SiLinkedin className="iconFooter" />
      </a>
    </div>
  );
}
