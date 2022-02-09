export interface DrumPad {
  id: number;
  letter: string;
  src: string;
  label: string;
}

export const DRUM_PADS: DrumPad[] = [
  {
    id: 1,
    letter: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    label: "Heater 1",
  },
  {
    id: 2,
    letter: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    label: "Heater 2",
  },
  {
    id: 3,
    letter: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    label: "Heater 3",
  },
  {
    id: 4,
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    label: "Heater 4",
  },
  {
    id: 5,
    letter: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    label: "Clap",
  },
  {
    id: 6,
    letter: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    label: "Open HH",
  },
  {
    id: 7,
    letter: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    label: "Kick n Hat",
  },
  {
    id: 8,
    letter: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    label: "Kick",
  },
  {
    id: 9,
    letter: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    label: "Closed HH",
  },
];
