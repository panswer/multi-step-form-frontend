import "./style.css";

/**
 * @typedef {React.ChangeEvent<HTMLInputElement>} ClickEvent
 */

/**
 * @typedef {object} PrimaryButtonProps
 * @property {string} textButton - button's text
 * @property {(e: ClickEvent)=>void} onClick - handler click
 * @property {React.CSSProperties} [style]
 */

/**
 * Primary button
 *
 * @param {PrimaryButtonProps} props - properties
 *
 * @returns {JSX.Element}
 */
const PrimaryButton = (props) => {
  /**
   * Default handle
   *
   * @param {ClickEvent} e
   *
   * @returns {void}
   */
  const handleSubmit = (e) => {
    console.warn(
      `Button ${e.target.innerText} without handle event to on click`
    );
  };

  return (
    <div className="primary-button-component">
      <div className="bg-blue"></div>
      <button
        className="btn-primary"
        onClick={props.onClick || handleSubmit}
        style={props.style}
      >
        {props.textButton}
      </button>
    </div>
  );
};

export default PrimaryButton;
