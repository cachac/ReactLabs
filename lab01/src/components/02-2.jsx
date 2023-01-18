import React, { useState } from "react";
import "../App.css";

const Buttons = (props) => {
  const [count, setCount] = useState(0);
  const [buttonTitle] = useState(props.buttonTitle);

  const disminuir = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <button className="button" onClick={() => setCount(count + 1)}>
        {buttonTitle}
      </button>
      <button className="button" onClick={() => disminuir()}>
        -
      </button>
    </div>
  );
};

export default Buttons;
