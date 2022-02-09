import { useEffect } from "react";

import "./DrumPad.styles.scss";

interface Props {
  letter: string;
  src: string;
  label: string;
  changeDisplayMessage: Function;
  keyPressed: string;
}

const DrumPad = ({ label, src, letter, changeDisplayMessage, keyPressed }: Props) => {
  const audio = new Audio(src);

  const pressButton = () => {
    audio.play();
    changeDisplayMessage(label);
  };

  useEffect(() => {
    if (keyPressed === letter.toLowerCase()) {
      pressButton();
    }
  }, [keyPressed]);

  return (
    <div id={label} className='drum-pad' onClick={pressButton}>
      {letter}
      <audio id={letter} src={src} />
    </div>
  );
};

export default DrumPad;
