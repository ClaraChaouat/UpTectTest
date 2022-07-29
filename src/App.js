import { NavigationBar } from "./components/NavigationBar";
import "./App.css";
import { Hero } from "./components/Hero";
import { Template } from "./components/Template";
import { FooterAdvert } from "./components/FooterAdvert";
import { MoreInfoPage } from "./components/MoreInfoPage";
import { TrialAdvert } from "./components/TrialAdvert";
import { SectionFeature } from "./components/SectionFeature";
import collaboration from "./images/collaboration.png";
import upppercardFrame from "./images/uppercard-frame.svg";
import candidatesFrame from "./images/frame-candidates.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <NavigationBar />
          <Hero />
        </header>
        <main style={{display:"none"}}>
          <Template />
          <SectionFeature
            kicker="Organise"
            title="Organize your hiring"
            description="A hiring flow you can wrap your head around."
            image={upppercardFrame}
            rowInverted
            theme="primary"
          />
          <SectionFeature
            kicker="Collaborate"
            title="Collaborate with your team"
            description="It’s easy for your whole team to join in on hiring."
            image={collaboration}
            theme="secondary"
          
          />
          <SectionFeature
            kicker="Connect"
            title="Connect with candidates"
            description="Stand out and show candidates who you are."
            image={candidatesFrame}
            rowInverted
            theme="tertiary"
          />
          {/* <UpperCards />
          <Middlecard />
          <BottomCard /> */}
          <FooterAdvert />
          <MoreInfoPage />
          <TrialAdvert />
        </main>
      </div>
    </div>
  );
}

export default App;
