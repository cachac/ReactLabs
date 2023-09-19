import React, { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

const Input = ({ num }) => {
  const [useText, setText] = useState(num);

  const handleInputChange = (e) => {
    // re-render all components
    setText(e.target.value);
  };

  return <input type="number" value={useText} onChange={handleInputChange} />;
};

Input.propTypes = {
  num: PropTypes.number.isRequired,
};

// evita el warning del prop.
Input.defaultProps = {
  num: "Default Prop",
};

// Best Practice ({ txt = -1 })

export default Input;
