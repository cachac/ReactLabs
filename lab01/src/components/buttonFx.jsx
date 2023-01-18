import React from "react";
import "../App.css";

const Buttons = ({ buttonTitle, count, onHandleChange, children }) => {
  const disminuir = () => {
    if (count > 0) count -= 1;
    console.log(`disminuir:  ${count}`);
    onHandleChange(count);
  };

  const aumentar = () => {
    count += 1;
    console.log(`aumentar:  ${count}`);
    onHandleChange(count);
  };

  console.log(`counter Init:  ${count}`);

  return (
    <div>
      <button className="button" onClick={() => aumentar()}>
        {children}
      </button>

      {/* {count !== 0 && ( */}
      <button className="button" onClick={() => disminuir()}>
        -
      </button>
      {/* )} */}
    </div>
  );
};

export default Buttons;
