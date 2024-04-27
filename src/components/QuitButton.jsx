import { useState } from "react";
import QuitConfirmWindow from "./QuitConfirmWindow";

function QuitButton() {
  const [isQuitPushed, setIsQuitPushed] = useState(false);

  const handleClick = () => {
    setIsQuitPushed(true);
  }

  const backOption = () => {
    setIsQuitPushed(false);
  }

  return (<>
  <button id="quit-button" onClick={handleClick} disabled={isQuitPushed}>X</button>
  {isQuitPushed && <QuitConfirmWindow backOption={backOption} />}
  </>);
}

export default QuitButton;
