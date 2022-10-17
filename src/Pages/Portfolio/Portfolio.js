import "./Portfolio.css";
import fuzzyFriendFinder from "./fuzzy-friend-finder.png";
import cooksKitchen from "./cooks-kitchen.png";
import teamprofilegenerator from "./team-profile-generator.png";
import employeeTracker from "./employee-tracker.png";
import codingQuiz from "./coding-quiz.png";
import weatherDashboard from "./weather-dashboard.png";
import tripSplit from "./trip-split.png";

export default function Portfolio() {
  const portfolio = [
    {
      Title: "Trip$plit",
      Image: tripSplit,
      liveLink: "https://trip-split-atoz.herokuapp.com/",
      repo: "https://github.com/JordanLaczkowski/trip_split",
    },
    {
      Title: "Fuzzy Friend Finder",
      Image: fuzzyFriendFinder,
      liveLink: "https://jordanlaczkowski.github.io/fuzzy-friend-finder/",
      repo: "https://github.com/JordanLaczkowski/fuzzy-friend-finder",
    },
    {
      Title: "5 Cooks in the Kitchen",
      Image: cooksKitchen,
      liveLink: "https://agile-shore-26692.herokuapp.com/",
      repo: "https://github.com/JordanLaczkowski/5-cooks-in-the-kitchen",
    },
    {
      Title: "Team Profile Generator",
      Image: teamprofilegenerator,
      liveLink: "https://jordanlaczkowski.github.io/Team-Profile-Generator/",
      repo: "https://github.com/JordanLaczkowski/Team-Profile-Generator",
    },
    {
      Title: "Employee Tracker",
      Image: employeeTracker,
      liveLink: "https://jordanlaczkowski.github.io/Employee-Tracker/",
      repo: "https://github.com/JordanLaczkowski/Employee-Tracker",
    },
    {
      Title: "Coding Quiz",
      Image: codingQuiz,
      liveLink: "https://jordanlaczkowski.github.io/Coding-Quiz/",
      repo: "https://github.com/JordanLaczkowski/Coding-Quiz",
    },
    {
      Title: "Weather Dashboard",
      Image: weatherDashboard,
      liveLink: "https://jordanlaczkowski.github.io/Weather-Dashboard/",
      repo: "https://github.com/JordanLaczkowski/Weather-Dashboard",
    },
  ];

  return (
    <div className="portfolioContainer">
      {portfolio.map((portfolio) => (
        <div className="portfolioCard">
          <div>
            <div className="title">
              <a href={portfolio.liveLink} target="_blank" rel="noreferrer">
                {portfolio.Title}
              </a>
            </div>
            <div className="code">
              <a href={portfolio.repo} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
          <img className="image" src={portfolio.Image} />
        </div>
      ))}
    </div>
  );
}
