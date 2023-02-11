import React from "react";
import "./style.css";

/**
 * @typedef {object} FormTitleProps
 * @property {string} title - title text
 * @property {React.CSSProperties} [style] - styles
 */

/**
 * Form's title
 *
 * @param {FormTitleProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormTitle = (props) => {
  return (
    <h1 className="form-text-title" style={props.style}>
      {props.title}
    </h1>
  );
};

export default FormTitle;
