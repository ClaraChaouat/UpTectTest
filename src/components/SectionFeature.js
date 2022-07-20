import "./sectionfeature.scss";

export function SectionFeature(props) {
  return (
    <div className="cardsContainer">
      <div className={`middleCards ${props.rowInverted ? "reversed" : ""}`}>
        <div className="middleCardsText">
          <p className={`middleCardsTextSection ${props.theme}`}>
            {props.kicker}
          </p>
          <p className="middleCardsTextTitle">{props.title}</p>
          <p className="middleCardsTextDescription">{props.description}</p>
        </div>
        <div className="middleCardsCard">
          <div className="middleCardsCardImagesContainer">
            <div className="middleCardsCardImagesBackground">
              <img src={props.image} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
