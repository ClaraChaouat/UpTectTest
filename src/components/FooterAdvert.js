import "./footeradvert.scss";
import getStarted from "../images/get-started.svg";
import tickWhite from "../images/tick-white.svg";
import { Button } from "./Button";

export function FooterAdvert() {
  return (
    <div style={{display:"none"}}  className="footerContainer">
      <div className="footerContainerBackground">
        <div className="footerBackgroundImage">
          <img src={getStarted} alt="Background effect"></img>
        </div>
        <div className="footerItems">
          <div className="footerTitle">
            Start your free <br /> Homerun trial today
          </div>
          <div className="footerConditions">
            <p className="footerConditionsText">
              <img src={tickWhite} alt="Tick symbol"></img>Totally free fro 15
              days
            </p>
            <p className="footerConditionsText">
              <img src={tickWhite} alt="Tick symbol"></img>No credit card needed
            </p>
          </div>
          <div>
            <Button type="button" buttonStyle="btn--secondary">
              Get started - It's free!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
