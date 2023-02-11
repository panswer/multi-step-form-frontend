import React from "react";
import "./style.css";

/**
 * @typedef {object} FormLabelProps
 * @property {string} label - text label
 * @property {string} id - id of input
 * @property {React.CSSProperties} style - label style
 */

/**
 * Form's label
 *
 * @param {FormLabelProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormLabel = (props) => {
  return (
    <label className="text-form-label" htmlFor={props.id} style={props.style}>
      {props.label}
    </label>
  );
};

export default FormLabel;
