import React, { useState, useRef } from "react";
import "./styles.css";

const RefUse = () => {
  const [name, setName] = useState("");
  const inputEl = useRef("");
  const resetInput = () => {
    setName("");
    inputEl.current.focus();
    console.log(inputEl.current.value);
  };
  return (
    <div>
      <div className="container">
        <input
          type="text"
          ref={inputEl}
          name="name"
          value={name}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <br />
      <div className="refUse">{name}</div>
    </div>
  );
};

export default RefUse;
