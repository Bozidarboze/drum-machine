import { useState, useEffect } from "react";

import DrumPad from "../DrumPad/DrumPad.component";

import { DRUM_PADS } from "../DrumPad/DRUM_PADS";

import "./DrumMachine.styles.scss";

interface Event {
  key: string;
}

const DrumMachine = () => {
  const [displayMessage, setDisplayMessage] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const drumPads = DRUM_PADS;

  const changeDisplayMessage = (message: string) => {
    window.clearTimeout();
    setDisplayMessage(message);
  };

  const onKeyPress = (e: Event) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
  }, []);

  return (
    <div id='drum-machine' className='drum-machine'>
      <h1 className='title'>Drum Machine</h1>
      <div id='display'>
        <span>{displayMessage}</span>
      </div>
      <div className='drumpads'>
        {drumPads.map(({ id, ...otherProps }) => (
          <DrumPad key={id} {...otherProps} changeDisplayMessage={changeDisplayMessage} keyPressed={keyPressed} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
