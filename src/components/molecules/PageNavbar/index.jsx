import { useContext } from "react";

import "./style.css";

import PageNum from "../../atoms/PageNum";

import formContext from "../../../contexts/form-context";

/**
 * @returns {JSX.Element}
 */
const PageNavbar = () => {
  const { step, pages } = useContext(formContext);

  return (
    <>
      <div className="step-navbar">
        {pages.map((_, page) => {
          const selected = page === step;
          return <PageNum selected={selected} key={page} num={page + 1} />;
        })}
      </div>
    </>
  );
};

export default PageNavbar;
