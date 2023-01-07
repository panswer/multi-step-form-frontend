import React, { useContext } from "react";
import formContext from "../../../contexts/form-context";
import "./style.css";

import PrimaryButton from "../../atoms/PrimaryButton";

/**
 * @typedef {import('../../atoms/PrimaryButton/index').ClickEvent} ClickEvent
 */

/**
 * @typedef {object} ButtonBottomProps
 */

/**
 * Button bottom
 *
 * @param {object} props - properties
 *
 * @returns {JSX.Element}
 */
const ButtonBottom = (props) => {
  const { nextPage } = useContext(formContext);
  return (
    <div className="content-button-bottom">
      <PrimaryButton textButton="next step" />
    </div>
  );
};

export default ButtonBottom;
