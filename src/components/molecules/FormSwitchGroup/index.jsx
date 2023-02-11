import React from "react";
import FormSelectText from "../../atoms/FormSelectText";
import SingleSwitch from "../../atoms/SingleSwitch";
import SpanPrice from "../../atoms/SpanPrice";
import "./style.css";
import iconCheck from "../../../imgs/icon-checkmark.svg";

/**
 * @typedef {"single-switch"} FormSingleSwitchGroupEnum
 *
 * @typedef {import('../../../utils/selectUtils').ChangeInputProps} ChangeInputProps
 *
 * @typedef {import("../../../contexts/form-context").FormInputType} FormInputType
 */

/**
 * @typedef {object} UpdateInputObj
 * @property {ChangeInputProps} changeInput
 * @property {FormInputType}
 */

/**
 * @type {Array<FormSingleSwitchGroupEnum>}
 */
export const formSingleSwitchGroupEnum = ["single-switch"];

/**
 * @typedef {"multi-switch"} FormMultiSwitchGroupEnum
 */
/**
 * @type {Array<FormMultiSwitchGroupEnum>}
 */
export const formMultiSwitchGroupEnum = ["multi-switch"];

/**
 * @typedef {FormSingleSwitchGroupEnum | FormMultiSwitchGroupEnum} FormSwitchGroupTypeEnum
 */

/**
 * @typedef {object} FormSingleSwitchGroupProps
 * @property {FormSingleSwitchGroupEnum} type - switch's type
 * @property {{0:string,1:string}} options - switch's type
 * @property {string} value - switch's value
 * @property {string} name - switch's name
 * @property {ChangeInputProps} updateInput - update a input when the switch change
 * @property {(e:React.ChangeEvent<HTMLInputElement>) => void} onChange - on change
 */

/**
 * @typedef {object} FormMultiSwitchOptionObj
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} type
 */

/**
 * @typedef {object} FormMultiSwitchGroupProps
 * @property {FormMultiSwitchGroupEnum} type - switch's type
 * @property {Array<FormMultiSwitchOptionObj>} options - switchs' options
 * @property {Array<string>} values - switchs' values
 * @property {string} name - switch's name
 * @property {(e: React.ChangeEvent<HTMLInputElement> => void)} onChange
 */

/**
 * @type {Array<FormSwitchGroupTypeEnum>}
 */
export const formSwitchGroupTypeEnum = formSingleSwitchGroupEnum.concat(
  formMultiSwitchGroupEnum
);

/**
 * Form switch group component
 *
 * @param {FormSingleSwitchGroupProps | FormMultiSwitchGroupProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormSwitchGroup = (props) => {
  if (formSwitchGroupTypeEnum.includes(props.type)) {
    if (formSingleSwitchGroupEnum.includes(props.type)) {
      /**
       * @type {FormSingleSwitchGroupProps}
       */
      const properties = props;

      return (
        <div className="form-switch-group-component">
          <FormSelectText
            isActive={properties.value === properties.options[0]}
            id={properties.name}
          >
            {properties.options[0]}
          </FormSelectText>
          <SingleSwitch
            singleSwitchName={properties.name}
            style={{ margin: "0px 1rem" }}
            isOn={properties.value === properties.options[1]}
            onChange={properties.onChange}
          />
          <FormSelectText
            isActive={properties.value === properties.options[1]}
            id={properties.name}
          >
            {properties.options[1]}
          </FormSelectText>
        </div>
      );
    } else if (formMultiSwitchGroupEnum.includes(props.type)) {
      /**
       * @type {FormMultiSwitchGroupProps}
       */
      const properties = props;

      return (
        <div className="form-multi-switch-group-component">
          {properties.options?.map((option) => {
            const group = `${properties.name}-${option.type}`;
            const key = `${group}-${option.title.split(" ").join("_")}`;

            return (
              <>
                <input
                  type="checkbox"
                  name={group}
                  id={key}
                  onChange={props.onChange}
                  checked={properties.values.includes(
                    option.title.split(" ").join("_")
                  )}
                />

                <label
                  className="single-option-component"
                  key={key}
                  htmlFor={key}
                >
                  <div className="option-checkbox">
                    <img src={iconCheck} alt={`icon-${key}`} />
                  </div>
                  <div className="option-title">
                    <FormSelectText
                      id={key}
                      isActive={true}
                      style={{
                        fontSize: ".8rem",
                        textTransform: "none",
                      }}
                    >
                      {option.title}
                    </FormSelectText>
                  </div>
                  <div className="option-description">
                    <FormSelectText
                      id={key}
                      style={{
                        fontSize: ".8rem",
                        textTransform: "none",
                      }}
                    >
                      {option.description}
                    </FormSelectText>
                  </div>
                  <div className="option-price">
                    <SpanPrice symbolPrice="$" type="mo">
                      {option.price}
                    </SpanPrice>
                  </div>
                </label>
              </>
            );
          })}
        </div>
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
};

export default FormSwitchGroup;
