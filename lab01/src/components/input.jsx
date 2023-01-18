import React, { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

const Buttons = ({ num }) => {
  const [useText, setText] = useState(num);

  const handleInputChange = (e) => {
    // re-render all components
    setText(e.target.value);
  };

  return <input type="number" value={useText} onChange={handleInputChange} />;
};

Buttons.propTypes = {
  num: PropTypes.number.isRequired,
};

Buttons.defaultProps = {
  num: "Default Prop",
};

// Best Practice ({ txt = -1 })

export default Buttons;
