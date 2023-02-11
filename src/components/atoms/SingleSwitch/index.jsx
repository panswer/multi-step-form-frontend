import React from "react";
import "./style.css";
/**
 * @typedef {object} SingleSwitchProps
 * @property {boolean} isOn - option 1 is left and option 2 is right
 * @property {string} singleSwitchName - sitch name
 * @property {React.CSSProperties} style - content style
 * @property {(e:React.ChangeEvent<HTMLInputElement>)=>void} onChange - handle change
 */

/**
 * Single switch component
 *
 * @param {SingleSwitchProps} props - properties
 *
 * @returns {JSX.Element}
 */
const SingleSwitch = (props) => {
  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    console.log(`${e.target.id}: ${e.target.value}`);
  };

  return (
    <label htmlFor={props.singleSwitchName}>
      <div className="single-switch-component" style={props.style}>
        <input
          type="checkbox"
          name={props.singleSwitchName}
          id={props.singleSwitchName}
          checked={props.isOn}
          onChange={props.onChange || handleChange}
        />
        <div className="single-switch">
          <div className="switch-circle"></div>
        </div>
      </div>
    </label>
  );
};

export default SingleSwitch;
