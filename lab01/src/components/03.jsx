import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const Buttons = ({ buttonTitle, count, onHandleChange, children }) => {
  console.log("Does it (re)render? 🤔");

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

Buttons.propTypes = {
  count: PropTypes.number.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  count: -1,
};

// Best Practice ({ count = -1 })

export default Buttons;
