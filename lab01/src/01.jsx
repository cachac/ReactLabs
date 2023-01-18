import React, { useState } from "react";
import "./App.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [title] = useState(props.title);
  const [buttonTitle] = useState(props.buttonTitle);

  const disminuir = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {title}: {count}
        </p>
        <div>
          <button className="button" onClick={() => setCount(count + 1)}>
            {buttonTitle}
          </button>
          <button className="button" onClick={() => disminuir()}>
            -
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
