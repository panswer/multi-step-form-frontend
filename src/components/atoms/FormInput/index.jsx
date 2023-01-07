import React from "react";

import "./style.css";

/**
 * @typedef {object} FormInputProps
 * @property {string} [inputType] - input's type
 * @property {string} [placeholder] - input's text example
 * @property {(e:React.ChangeEvent<HTMLInputElement>)=>void} [onChange] - on change
 * @property {string} inputId - input's id
 * @property {string|number} [value] - input's value
 */

/**
 * @typedef {React.ChangeEvent<HTMLInputElement>} ChangeEventObj
 */

/**
 * Form's input
 *
 * @param {FormInputProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormInput = (props) => {
  /**
   * handle change
   *
   * @param {ChangeEventObj} e - event
   *
   * @returns {void}
   */
  const handleChange = (e) => {
    console.warn(
      `The input ${props.inputId} don't have an handler event to catch value ${e.target.value}`
    );
  };

  return (
    <input
      className="input-value"
      id={props.inputId}
      type={props.inputType || "text"}
      placeholder={props.placeholder || ""}
      onChange={props.onChange || handleChange}
      value={props.value || ""}
    />
  );
};

export default FormInput;
