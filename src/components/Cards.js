import "./cards.scss";

export function Cards() {
  return (
    <div className="cardsContainer">
      <div className="upperCards">
        <div className="upperCardsText">
          <p className="upperCardsTextSection">Organise</p>
          <p className="upperCardsTextTitle">
            Organise
            <br />
            your hiring
          </p>
          <p className="upperCardsTextDescription">
            A hiring flow you can wrap your <br /> head around
          </p>
        </div>
        <div className="upperCardsCard">
          <div className="upperCardsCardImagesContainer">
            <div className="upperCardsCardImagesBackground"></div>
          </div>
        </div>
      </div>
      <div className="midCards"></div>
      <div className="bottomCards"></div>
    </div>
  );
}
