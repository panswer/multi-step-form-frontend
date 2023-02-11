import CircleIcon from "../../atoms/CircleIcon";
import FormTitle from "../../atoms/FormTitle";
import FormDescribe from "../../atoms/FormDescribe";

import "./style.css";

/**
 * @typedef {object} IconSchema
 * @property {string} alternativeText
 * @property {string} source
 */

/**
 * @typedef {object} FormResultProps
 * @property {IconSchema} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * Form result
 *
 * @param {FormResultProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormResult = (props) => {
  return (
    <div className="form-result-component">
      <div className="success-icon">
        <CircleIcon
          alt={props.icon.alternativeText}
          url={props.icon.source}
          style={{ margin: "0 auto 0", height: "100%", width: "auto" }}
        />
      </div>
      <div className="success-title">
        <FormTitle title={props.title} />
      </div>
      <div className="success-description">
        <FormDescribe description={props.description} />
      </div>
    </div>
  );
};

export default FormResult;
