import { useEffect } from "react";

import "./DrumPad.styles.scss";

import { Props, Event } from "./interfaces";

const DrumPad = ({ label, src, letter, changeDisplayMessage }: Props) => {
  const audio = new Audio(src);

  const pressButton = () => {
    audio.currentTime = 0;
    audio.play();
    changeDisplayMessage(label);
    document.getElementById(label)?.classList.add("pressed");
    setTimeout(() => {
      document.getElementById(label)?.classList.remove("pressed");
    }, 100);
  };

  const onKeyPress = (e: Event) => {
    if (e.key === letter.toLowerCase()) {
      pressButton();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);

    return () => window.removeEventListener("keydown", onKeyPress);
  }, []);

  return (
    <div id={label} className='drum-pad' onClick={pressButton}>
      {letter}
      <audio id={letter} src={src} />
    </div>
  );
};

export default DrumPad;
