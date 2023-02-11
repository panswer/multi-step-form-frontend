import "./style.css";

import CircleIcon from "../../atoms/CircleIcon";
import SubTitle from "../../atoms/SubTitle";
import FormDescribe from "../../atoms/FormDescribe";
import React from "react";

/**
 * @typedef {"radio"} SelectGroupEnum
 */

/**
 * @type {Array<SelectGroupEnum>}
 */
export const selectGroupEnum = ["radio"];

/**
 * @typedef {object} FormSelectGroupProps
 * @property {import('../../atoms/CircleIcon/index').CircleIconProps} icon
 * @property {string} title - title of select
 * @property {string} description - description on select
 * @property {React.CSSProperties} selectStyle - style of content
 * @property {string} selectGroupName - Name of select group
 * @property {string} value - Select's value
 * @property {string} [plus] - plus in plan
 * @property {(e:React.ChangeEvent<HTMLInputElement>) => void} [onChange] - notify if the value is selected
 * @property {boolean} isSelected - is option selected
 * @property {number} [innerWidth] - width of screen
 */

/**
 * Form of select group
 *
 * @param {FormSelectGroupProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormSelectGroup = (props) => {
  /**
   * On change of select
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   *
   * @returns {void}
   */
  const handleChange = (e) => {
    console.log(`${e.target.id}: ${e.target.checked}`);
  };

  return (
    <>
      <input
        type="radio"
        name={props.selectGroupName}
        id={props.title}
        value={props.value}
        className="select-radio"
        onChange={props.onChange || handleChange}
        checked={props.isSelected}
      />
      <label htmlFor={props.title}>
        <div
          className="content-form_select_group"
          style={props.selectStyle || {}}
        >
          <div className="circle">
            <CircleIcon url={props.icon.url} alt={props.icon.alt} />
          </div>
          <div className="title">
            <SubTitle text={props.title} />
          </div>
          <div className="price">
            <FormDescribe
              description={props.description}
              style={
                props.innerWidth < 1024
                  ? {}
                  : {
                      marginBottom: "0px",
                    }
              }
            />
          </div>
          {props.plus ? (
            <div className="plus">
              <SubTitle
                text={props.plus}
                style={{
                  fontSize: ".8rem",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </label>
    </>
  );
};

export default FormSelectGroup;
