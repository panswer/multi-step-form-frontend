import React from "react";
import "./style.css";

/**
 * @typedef {object} SpanPriceProps
 * @property {string} symbolPrice
 * @property {number} children
 * @property {string} type
 * @property {React.CSSProperties} style
 * @property {boolean} [wihtoutPlus]
 */

/**
 * Label with format of price
 *
 * @param {SpanPriceProps} props
 *
 * @returns {JSX.Element}
 */
const SpanPrice = (props) => {
  return (
    <span className="price-component" style={props.style}>
      {props.wihtoutPlus ? "" : "+"}
      {props.symbolPrice}
      {props.children}/{props.type}
    </span>
  );
};

export default SpanPrice;
