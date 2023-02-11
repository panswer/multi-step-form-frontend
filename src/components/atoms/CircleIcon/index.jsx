import React from "react";
import "./style.css";

/**
 * @typedef {object} CircleIconProps
 * @property {string} url - icon
 * @property {string} alt - alternative text
 * @property {React.CSSProperties} [style] - styles
 */

/**
 * Circle template
 *
 * @param {CircleIconProps} props - properties
 *
 * @returns {JSX.Element}
 */
const CircleIcon = (props) => {
  return (
    <>
      <img
        className="img-circle-icon"
        src={props.url}
        alt={props.alt}
        style={props.style}
      />
    </>
  );
};

export default CircleIcon;
