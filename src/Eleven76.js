import { useState, useEffect } from "react";

const Eleven76 = (props) => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [attack, setAttack] = useState(0);
  const [release, setRelease] = useState(0);
  const [ratio, setRatio] = useState(4);

  return (
    <div>
      <p>input</p>
      <p>{input}</p>
      <p>output</p>
      <p>{output}</p>
    </div>
  );
};

export default Eleven76;
