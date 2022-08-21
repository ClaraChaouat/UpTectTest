import "./trialadvert.scss";
import tick from "../images/tick.svg";
import { Button } from "./Button";

export function TrialAdvert() {
  return (
    <div className="trialAdvertContainer">
      <div className="trialAdvertQuestion">What are you waiting for?</div>
      <div className="trialAdvertTitle">
        Start you free <br /> Homerun trial today
      </div>
      <div>
        <Button buttonStyle="btn--primary">Get started - It's free!</Button>
      </div>
      <div className="trialAdvertConditions">
        <p>
          <img src={tick} alt="Tick symbol"></img>Totally free for 15 days
        </p>
        <p>
          <img src={tick} alt="Tick symbol"></img>No credit card needed
        </p>
      </div>
      <div></div>
    </div>
  );
}
