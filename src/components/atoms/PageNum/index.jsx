import "./style.css";

/**
 * @typedef {object} PropertiesSchema
 * @property {number} num - number
 * @property {boolean} selected - is actived
 * @property {React.CSSProperties} style
 */

/**
 * Component of number
 *
 * @param {PropertiesSchema} props - properties
 *
 * @returns {JSX.Element}
 */
const PageNum = ({ num, selected, style }) => {
  return (
    <>
      <button className={`page-root ${selected ? "active" : ""}`} style={style}>
        {num}
      </button>
    </>
  );
};

export default PageNum;
