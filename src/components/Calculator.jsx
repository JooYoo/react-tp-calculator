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

  const append = (num) => {
    if (current === "0" && num === ".") {
      // 0.x
      setCurrent(`0${num}`);
    } else if (current === "0") {
      // clear default 0 at beginning
      setCurrent(num);
    } else {
      // update number
      setCurrent(`${current}${num}`);
    }
  };

  const dot = () => {
    // if dot not exist then add
    if (current.indexOf(".") === -1) {
      append(".");
    }
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
        <div className="btn" onClick={() => append("7")}>
          7
        </div>
        <div className="btn" onClick={() => append("8")}>
          8
        </div>
        <div className="btn" onClick={() => append("9")}>
          9
        </div>
        <div className="btn operator">⨉</div>
        <div className="btn" onClick={() => append("4")}>
          4
        </div>
        <div className="btn" onClick={() => append("5")}>
          5
        </div>
        <div className="btn" onClick={() => append("6")}>
          6
        </div>
        <div className="btn operator">−</div>
        <div className="btn" onClick={() => append("1")}>
          1
        </div>
        <div className="btn" onClick={() => append("2")}>
          2
        </div>
        <div className="btn" onClick={() => append("3")}>
          3
        </div>
        <div className="btn operator">+</div>
        <div className="btn zero" onClick={() => append("0")}>
          0
        </div>
        <div className="btn" onClick={dot}>
          .
        </div>
        <div className="btn operator">=</div>
      </div>
    </div>
  );
};

export default Calculator;
