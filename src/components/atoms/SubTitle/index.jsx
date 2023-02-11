import "./style.css";

/**
 * @typedef {object} SubTitleProps
 * @property {string} text
 * @property {React.CSSProperties} [style]
 */

/**
 * Sub-Title
 *
 * @param {SubTitleProps} props - properties
 *
 * @returns {JSX.Element}
 */
const SubTitle = (props) => {
  return (
    <>
      <h2 className="sub-title" style={props.style}>
        {props.text}
      </h2>
    </>
  );
};

export default SubTitle;
