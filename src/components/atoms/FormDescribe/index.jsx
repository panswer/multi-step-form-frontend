import React from "react";
import "./style.css";

/**
 * @typedef {object} FormDescribeProps
 * @property {string} description - text description
 * @property {React.CSSProperties} [style] - styles
 */

/**
 * form's description
 *
 * @param {FormDescribeProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormDescribe = (props) => {
  return (
    <span className="form-text-description" style={props.style}>
      {props.description}
    </span>
  );
};

export default FormDescribe;
