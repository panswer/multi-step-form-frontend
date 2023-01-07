import "./style.css";

/**
 * @typedef {React.ChangeEvent<HTMLInputElement>} ClickEvent
 */

/**
 * @typedef {object} PrimaryButtonProps
 * @property {string} textButton - button's text
 * @property {(e: ClickEvent)=>void} onClick - handler click
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
    <button
      className="btn-primary"
      onClick={(e) => {
        console.log("=".repeat(50));
      }}
    >
      {props.textButton}
    </button>
  );
};

export default PrimaryButton;
