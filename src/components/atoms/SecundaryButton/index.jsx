import React from "react";
import "./style.css";

/**
 * @typedef {object} SecondaryButtonProps
 * @property {string} children - button text
 * @property {React.CSSProperties} [style] -styles
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onClick
 */

/**
 * Secondary button component
 *
 * @param {SecondaryButtonProps} props - properties
 *
 * @returns {JSX.Element}
 */
const SecondaryButton = (props) => {
  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e - event
   *
   * @returns {void}
   */
  const handleClick = (e) => {
    e.preventDefault();

    console.warn("Button without action!");
  };

  return (
    <button
      className="secundary-button"
      style={props.style}
      onClick={props.onClick || handleClick}
    >
      {props.children}
    </button>
  );
};

export default SecondaryButton;
