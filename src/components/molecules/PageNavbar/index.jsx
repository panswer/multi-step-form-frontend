import { useContext } from "react";

import "./style.css";

import PageNum from "../../atoms/PageNum";
import FormDescribe from "../../atoms/FormDescribe";
import FormTitle from "../../atoms/FormTitle";

import formContext from "../../../contexts/form-context";

/**
 * @typedef {object} PageNavbarProps
 * @property {boolean} showPageInfo - has to show the page info
 */

/**
 * navbar info
 *
 * @param {PageNavbarProps} props
 *
 * @returns {JSX.Element}
 */
const PageNavbar = (props) => {
  const { step, pages } = useContext(formContext);

  return (
    <>
      <div className="step-navbar">
        {pages.map(({ info }, page) => {
          const selected = page === step;
          const pageNum = page + 1;

          return props.showPageInfo ? (
            <div className="page">
              <PageNum
                selected={selected}
                key={page}
                num={pageNum}
                style={{
                  gridArea: "pageNum",
                }}
              />
              <FormDescribe
                description={`step ${pageNum}`}
                style={{
                  color: "var(--color-neutral-cool-gray)",
                  margin: 0,
                  textTransform: "uppercase",
                  fontSize: ".8rem",
                  gridArea: "pageStr",
                }}
              />
              <FormTitle
                title={info}
                style={{
                  color: "var(--color-neutral-white)",
                  fontSize: ".8rem",
                  textTransform: "uppercase",
                  margin: 0,
                  gridArea: "pageTitle",
                }}
              />
            </div>
          ) : (
            <>
              <PageNum selected={selected} key={page} num={page + 1} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PageNavbar;
