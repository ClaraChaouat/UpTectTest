import "./button.scss";

const Styles = ["btn--primary", "btn--secondary"];

export function Button({ children, buttonStyle}) {
  const CheckButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];


  return(
    <button className={`btn ${CheckButtonStyle}`}>{children}</button>

  ) ;
}
