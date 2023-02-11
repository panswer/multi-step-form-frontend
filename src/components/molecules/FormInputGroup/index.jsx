import React from "react";

import "./style.css";

import FormLabel from "../../atoms/FormLabel";
import FormInput from "../../atoms/FormInput/index";

import { inputTypes } from "../../atoms/FormInput";
export const inputGroupEnum = inputTypes;

/**
 * @typedef {import('../../atoms/FormInput/index').ChangeEventObj} ChangeEventObj
 */

/**
 * @typedef {import('../../atoms/FormInput/index').InputTypeEnum} InputTypeEnum
 *
 * @typedef {import('../../atoms/FormSelect/index').FormSelectTypeEnum} FormSelectTypeEnum
 */

/**
 * @typedef {object} FormInputProps
 * @property {string} [inputLabel] - input's text label
 * @property {string} inputId - input's id
 * @property {string} value - input's value
 * @property {InputTypeEnum} [inputType] - input's type
 * @property {(e:ChangeEventObj) => void} [onChange] - on change input
 * @property {string} [textExample] - input's placeholder
 */

/**
 * Form's input and label
 *
 * @param {FormInputProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormInputGroup = (props) => {
  return (
    <>
      <div className="content-form-input">
        <FormLabel
          id={props.inputId}
          label={props.inputLabel}
          key={props.inputId}
        />
        <FormInput
          inputId={props.inputId}
          placeholder={props.textExample}
          onChange={props.onChange}
          value={props.value}
          inputType={props.inputType}
        />
      </div>
    </>
  );
};

export default FormInputGroup;
