import "./style.css";

/**
 * @typedef {object} PropertiesSchema
 * @property {number} num - number
 * @property {boolean} selected - is actived
 */

/**
 * Component of number
 *
 * @param {PropertiesSchema} props - properties
 *
 * @returns {JSX.Element}
 */
const PageNum = ({ num, selected }) => {
  return (
    <>
      <button className={`page-root ${selected ? "active" : ""}`}>{num}</button>
    </>
  );
};

export default PageNum;
