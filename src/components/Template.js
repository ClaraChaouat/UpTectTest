import "./template.scss";
import screenshot from "../images/screenshot-frame.png";

export function Template() {
  return (
    <div className="screenshot">
      <img src={screenshot} alt="Screenshot frame"></img>
    </div>
  );
}
