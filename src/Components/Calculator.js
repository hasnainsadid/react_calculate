import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, setvalue] = useState("");

  const clicked = (e) => {
    setvalue(value.concat(e.target.name));
  };
  const clear = () => {
    setvalue("");
  };
  const back = () => {
    setvalue(value.slice(0, value.length - 1));
  };
  const sum = () => {
    try {
      setvalue(eval(value).toString());
    } catch (err) {
      setvalue("Syntax Error");
    }
  };

  return (
    <>
      <div className="container">
        <h3 className="text">Calculator</h3>
        <form>
          <input type="text" value={value} placeholder="0" />
        </form>
        <button className="clear1" onClick={clear}>
          C
        </button>
        <button className="clear" onClick={back}>
          DEL
        </button>
        {/* <button className="yellowd" name="-" onClick={click}>
          +/-
        </button> */}
        <button className="yellowd" name="/" onClick={clicked}>
          &divide;
        </button>
        <br />
        <button name="7" onClick={clicked}>
          7
        </button>
        <button name="8" onClick={clicked}>
          8
        </button>
        <button name="9" onClick={clicked}>
          9
        </button>
        <button className="yellowd" name="*" onClick={clicked}>
          &times;
        </button>
        <br />
        <button name="4" onClick={clicked}>
          4
        </button>
        <button name="5" onClick={clicked}>
          5
        </button>
        <button name="6" onClick={clicked}>
          6
        </button>
        <button className="yellowd" name="-" onClick={clicked}>
          &ndash;
        </button>
        <br />
        <button name="1" onClick={clicked}>
          1
        </button>
        <button name="2" onClick={clicked}>
          2
        </button>
        <button name="3" onClick={clicked}>
          3
        </button>
        <button name="+" className="plus" onClick={clicked}>
          +
        </button>
        <br />
        <button name="0" onClick={clicked}>
          0
        </button>
        <button name="." onClick={clicked}>
          .
        </button>
        <button className="sum" onClick={sum}>
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;
