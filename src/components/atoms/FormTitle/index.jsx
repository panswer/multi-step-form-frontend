import "./style.css";

/**
 * @typedef {object} FormTitleProps
 * @property {string} title - title text
 */

/**
 * Form's title
 *
 * @param {FormTitleProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormTitle = (props) => {
  return <h1 className="form-text-title">{props.title}</h1>;
};

export default FormTitle;
