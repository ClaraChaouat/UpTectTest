import "./hero.scss";
import { Button } from "./Button";
import googleLogo from "../images/google-icon.svg";
import appleLogo from "../images/apple-icon.svg";
import facebookLogo from "../images/facebook-icon.svg";
import spotifyLogo from "../images/spotify-icon.svg";
import dropboxLogo from "../images/dropbox-icon.svg";
import githubLogo from "../images/github-icon.svg";
import netflixLogo from "../images/netflix-icon.svg";
import charlotte from "../images/charlotte-mouse.svg";
import lily from "../images/lily-mouse.svg";
import bouba from "../images/bouba-mouse.svg";
import alexandre from "../images/alexandre-mouse.svg";

export function Hero() {
  return (
    <div style={{display:"none"}} className="subheader">
      <div className="subheaderTitle">
        <div className="subheaderTitleContainer">
          <p>Where hiring comes together.</p>
          <img
            className="charlotteMouse"
            src={charlotte}
            alt="Charlotte's mouse"
          ></img>
          <img className="lilyMouse" src={lily} alt="Lily's mouse"></img>
          <img className="boubaMouse" src={bouba} alt="Bouba's mouse"></img>
          <img
            className="alexandreMouse"
            src={alexandre}
            alt="Alexandre's mouse"
          ></img>
        </div>
      </div>

      <div className="subheaderSubtitle">
        <p>
          Everything you need to organize your hiring and make a great
          impression
        </p>
      </div>
      <div className="subheaderSubtitleButtonContainer">
        <Button type="button" buttonStyle="btn--primary">
          Get started - It's free!
        </Button>
      </div>
      <div className="subheaderSubtitleFooter">
        <div className="subheaderSubtitleFooterText">
          <p>Join thousands of teams hiring with Homerun</p>
        </div>
        <div className="subheaderSubtitleFooterIcon">
          <ul>
            <li>
              <img src={googleLogo} alt="Google log"></img>
            </li>
            <li>
              <img src={appleLogo} alt="Apple logo"></img>
            </li>
            <li>
              <img src={facebookLogo} alt="Facebook log"></img>
            </li>
            <li>
              <img src={spotifyLogo} alt="Spotify logo"></img>
            </li>
            <li>
              <img src={dropboxLogo} alt="Dropbox logo"></img>
            </li>
            <li>
              <img src={githubLogo} alt="Github logo"></img>
            </li>
            <li>
              <img src={netflixLogo} alt="Netflix logo"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
