import React, { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

import "./style.css";

/**
 * @typedef {"text"|"email"} InputTypeEnum
 */

/**
 * @type {Array<InputTypeEnum>}
 */
export const inputTypes = ["email", "text"];

/**
 * @typedef {object} FormInputProps
 * @property {InputTypeEnum} [inputType] - input's type
 * @property {string} [placeholder] - input's text example
 * @property {(e:React.ChangeEvent<HTMLInputElement>)=>void} [onChange] - on change
 * @property {string} inputId - input's id
 * @property {string|number} [value] - input's value
 * @property {string} [messageError] - message error
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
  const [showMessage, setShowMessage] = useState(false);
  /**
   * @type {React.MutableRefObject<HTMLInputElement | null>}
   */
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current;

      input.addEventListener("focusout", (e) => {
        setShowMessage(!e.target.value);
      });
    }
  }, [inputRef]);

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

  return inputTypes.includes(props.inputType) ? (
    <div className="form-input-component">
      {props.messageError && showMessage ? (
        <span className="message-error">{props.messageError}</span>
      ) : (
        <></>
      )}
      <input
        ref={inputRef}
        className="input-value"
        id={props.inputId}
        type={props.inputType || "text"}
        placeholder={props.placeholder || ""}
        onChange={props.onChange || handleChange}
        value={props.value || ""}
      />
    </div>
  ) : (
    <></>
  );
};

export default FormInput;
