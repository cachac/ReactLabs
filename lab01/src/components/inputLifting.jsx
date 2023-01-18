import React from "react";
import "../App.css";
import PropTypes from "prop-types";

const Buttons = ({ num = -1, onHandleInputChange }) => {
  return <input type="number" value={num} onChange={onHandleInputChange} />;
};

Buttons.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Buttons;
