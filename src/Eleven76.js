import { useState, useEffect } from "react";

const Eleven76 = (props) => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [attack, setAttack] = useState(0);
  const [release, setRelease] = useState(0);
  const [ratio, setRatio] = useState(4);

  const bigKnobs = [
    "-inf",
    "-54",
    "-48",
    "-42",
    "-36",
    "-33",
    "-30",
    "-27",
    "-24",
    "-21",
    "-18",
    "-15",
    "-12",
    "-9",
    "-6",
    "-3",
    "0",
  ];

  const shapeKnobs = [1, 2, 3, 4, 5, 6, 7];

  const buttonPlus = (setValue, value, max) => {
    if (value < max) {
      setValue(value + 1);
    }
  };
  const buttonMinus = (setValue, value, min) => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <p>input</p>
      <p>{bigKnobs[input]}</p>
      <button onClick={() => buttonMinus(setInput, input, 0)}>-</button>
      <button onClick={() => buttonPlus(setInput, input, bigKnobs.length - 1)}>
        +
      </button>
      <p>output</p>
      <p>{bigKnobs[output]}</p>
      <button onClick={() => buttonMinus(setOutput, output, 0)}>-</button>
      <button
        onClick={() => buttonPlus(setOutput, output, bigKnobs.length - 1)}
      >
        +
      </button>
      <p>attack</p>
      <p>{shapeKnobs[attack]}</p>
      <button onClick={() => buttonMinus(setAttack, attack, 0)}>-</button>
      <button
        onClick={() => buttonPlus(setAttack, attack, shapeKnobs.length - 1)}
      >
        +
      </button>
    </div>
  );
};

export default Eleven76;
