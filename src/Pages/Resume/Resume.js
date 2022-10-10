import "./Resume.css";
import resumeimg from "./resume.png";
import { MdOutlineFileDownload } from "react-icons/md";
import resumepdf from "./updatedresume.pdf";

export default function Resume() {
  const resume = [
    {
      Title: "Resume",
      Image: resumeimg,
    },
  ];
  return (
    <div className="resumeContainer">
      {resume.map((resume) => (
        <div className="resumeCard">
          <div>
            <div className="title"></div>
          </div>
          <img className="image" src={resume.Image} />
          <a href={resumepdf} target="_blank" rel="noreferrer">
            Download Resume <MdOutlineFileDownload />
          </a>
        </div>
      ))}
      <div className="prof">
        <h2>Proficiencies</h2>
        <ul>
          <li>Costumer Service</li>
          <li>Team Player</li>
          <li>Willing to learn new technologies</li>
        </ul>
      </div>
    </div>
  );
}
