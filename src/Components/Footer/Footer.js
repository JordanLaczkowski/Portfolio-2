import "./Footer.css";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <div className="containerFooter">
      <a
        href="https://github.com/JordanLaczkowski"
        target="_blank"
        rel="noreferrer"
        className="linkFooter"
      >
        <SiGithub className="iconFooter" />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-laczkowski-30065a195/"
        target="_blank"
        rel="noreferrer"
        className="linkFooter"
      >
        <SiLinkedin className="iconFooter" />
      </a>
      <a
        href="https://www.facebook.com/jaylax23"
        target="_blank"
        rel="noreferrer"
        className="linkFooter"
      >
        <SiFacebook className="iconFooter" />
      </a>
    </div>
  );
}
