/**
 * @typedef {object} PageInfoProps
 * @property {string} subTitle
 * @property {string} title
 */

/**
 * Show the page info
 *
 * @param {PageInfoProps} props - properties
 *
 * @returns {JSX.Element}
 */
const PageInfo = (props) => {
  return (
    <div className="page-info-component">
      <span className="sub-title">{props.subTitle}</span>
      <span className="title">{props.title}</span>
    </div>
  );
};

export default PageInfo;
