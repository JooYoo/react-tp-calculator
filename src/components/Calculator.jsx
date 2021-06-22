import React from "react";

const Calculator = () => {
  return (
    <div>
      <div className="calculator">
        <div className="display">12345</div>
        <div className="btn">AC</div>
        <div className="btn">+ / −</div>
        <div className="btn">%</div>
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
