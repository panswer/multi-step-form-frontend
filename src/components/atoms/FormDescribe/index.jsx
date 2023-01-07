import "./style.css";

/**
 * @typedef {object} FormDescribeProps
 * @property {string} description - text description
 */

/**
 * form's description
 *
 * @param {FormDescribeProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormDescribe = (props) => {
  return <span className="form-text-description">{props.description}</span>;
};

export default FormDescribe;
