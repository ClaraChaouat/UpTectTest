import "./moreinfopage.scss";
import greenBox from "../images/green-box.svg";
import yellowBbox from "../images/yellow-box.png";
import purpleBbox from "../images/purple-box.svg";
import pinkBox from "../images/pink-box.png";
import headOfSales from "../images/head-of-sales.png";
import cyanBox from "../images/cyan-box.png";
import textBox from "../images/text-box.png";

export function MoreInfoPage() {
  return (
    <div   className="moreInfoPageContainer">
      <div className="moreInfoPage">
        <div className="moreInfoPageHeader">
          <p className="moreInfoPageHeaderTitle">But wait. There is more</p>
          <p className="moreInfoPageHeaderText">
            Leverage winning strategies to best promote jobs.
          </p>
          <p className="moreInfoPageHeaderText">
            Find the ideal candidates faster
          </p>
        </div>

        <div className="moreInfoPageFeatures">
          <div className="columnOne">
            <div className="row1">
              <img src={headOfSales} alt="Editor feature description"></img>
              <div>
                <h3>Job Editor</h3>
                <p>
                  Our easy-to-use editor allows you to create customized job ads
                  within minutes.
                </p>
              </div>
            </div>
            <div className="row2">
              <img src={cyanBox} alt="Custom tags feature description"></img>
              <div>
                <h3>Create Custome Tags </h3>
                <p>
                  Tags help you organize and structure candidates more
                  efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="columnTwo">
            <div className="row1">
              <img src={yellowBbox} alt=""></img>
              <div>
                <h3>Accept & Reject </h3>
                <p>
                  Automate tasks and save time. With one click you can accept or
                  reject candidates.
                </p>
              </div>
            </div>
            <div className="row2">
              <img src={purpleBbox} alt="Responsive fetaure description"></img>
            </div>
            <div className="row3">
              <img src={pinkBox} alt="Responsive fetaure description"></img>
              <div>
                <h3>Boost Your Employer Branding </h3>
                <p>
                  Stand out with your branded careers site - including your
                  company’s own custom URL.
                </p>
              </div>
            </div>
          </div>
          <div className="columnThree">
            <div className="row1">
              <img
                src={greenBox}
                alt="Team collaboration and communication feature description"
              ></img>
            </div>
            <div className="row2">
              <img
                src={textBox}
                alt="Team collaboration and communication feature description"
              ></img>
              <div>
                <h3>Notes </h3>
                <p>Collect your thoughts and share them with colleagues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
