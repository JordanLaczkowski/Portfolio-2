import "./Portfolio.css";
import fuzzyFriendFinder from "./fuzzy-friend-finder.png";
import cooksKitchen from "./cooks-kitchen.png";
import teamprofilegenerator from "./team-profile-generator.png";

export default function Portfolio() {
  const portfolio = [
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
  ];

  return (
    <div className="portfolioContainer">
      {portfolio.map((portfolio) => (
        <div className="portfolioCard">
          <div>
            <h4>{portfolio.Title}</h4>
          </div>
          <img src={portfolio.Image} />
          <a href={portfolio.liveLink}>deployedSite</a>
          <a href={portfolio.repo}>GitHub</a>
        </div>
      ))}
    </div>
  );
}
