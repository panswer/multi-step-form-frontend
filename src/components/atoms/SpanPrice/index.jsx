import "./style.css";

/**
 * @typedef {object} SpanPriceProps
 * @property {string} symbolPrice
 * @property {string} type
 * @property {number} children
 * @property {React.CSSProperties} style
 */

/**
 * @param {SpanPriceProps} props
 */
const SpanPrice = (props) => {
  return (
    <span className="price-component" style={props.style}>
      +{props.symbolPrice}
      {props.children}/{props.type}
    </span>
  );
};

export default SpanPrice;
