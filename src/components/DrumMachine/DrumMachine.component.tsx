import { useState } from "react";

import DrumPad from "../DrumPad/DrumPad.component";

import { DRUM_PADS } from "../DrumPad/DRUM_PADS";

import "./DrumMachine.styles.scss";

const DrumMachine = () => {
  const [displayMessage, setDisplayMessage] = useState("");
  const drumPads = DRUM_PADS;

  const changeDisplayMessage = (message: string) => {
    setDisplayMessage(message);
  };

  return (
    <div id='drum-machine' className='drum-machine'>
      <h1 className='title'>Drum Machine</h1>
      <div id='display'>
        <span>{displayMessage}</span>
      </div>
      <div className='drumpads'>
        {drumPads.map(({ id, ...otherProps }) => (
          <DrumPad key={id} {...otherProps} changeDisplayMessage={changeDisplayMessage} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
