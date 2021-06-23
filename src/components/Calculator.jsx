import React, { useState } from "react";

const Calculator = () => {
  const initCurrent = "0";
  const [current, setCurrent] = useState(initCurrent);

  // methods
  const clear = () => {
    setCurrent(initCurrent);
  };

  const sign = () => {
    // skip 0
    if (current === "0") return;
    // switch the sign between + / -
    const newCurr =
      current.charAt(0) === "-" ? current.slice(1) : `-${current}`;
    setCurrent(newCurr);
  };

  const percent = () => {
    const newCurr = `${parseFloat(current) / 100}`;
    setCurrent(newCurr);
  };

  return (
    <div>
      <div className="calculator">
        <div className="display">{current}</div>
        <div className="btn" onClick={clear}>
          AC
        </div>
        <div className="btn" onClick={sign}>
          + / −
        </div>
        <div className="btn" onClick={percent}>
          %
        </div>
        <div className="btn operator">÷</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn operator">⨉</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn operator">−</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn operator">+</div>
        <div className="btn zero">0</div>
        <div className="btn">.</div>
        <div className="btn operator">=</div>
      </div>
    </div>
  );
};

export default Calculator;
