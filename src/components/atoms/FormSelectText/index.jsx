import "./style.css";

/**
 * @typedef {object} FormSelectTextProps
 * @property {string} children - text
 * @property {boolean} isActive - is active
 * @property {string} id - input's id
 * @property {React.CSSProperties} [style]
 */

/**
 * Form select text component
 *
 * @param {FormSelectTextProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormSelectText = (props) => {
  return (
    <label
      className={`form-select-text ${props.isActive ? "active" : ""}`}
      htmlFor={props.id}
      style={props.style}
    >
      {props.children}
    </label>
  );
};

export default FormSelectText;
