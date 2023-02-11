import React, { useContext } from "react";
import formContext from "../../../contexts/form-context";
import "./style.css";
import { getNumberFromString } from "../../../utils/numberUtils";

import SecondaryButton from "../../atoms/SecundaryButton";
import PrimaryButton from "../../atoms/PrimaryButton";

/**
 * @typedef {import('../../atoms/PrimaryButton/index').ClickEvent} ClickEvent
 * @typedef {import('../../../contexts/form-context').InvoiceSchema} InvoiceSchema
 */

/**
 * @typedef {object} ButtonBottomProps
 */

/**
 * Button bottom
 *
 * @param {object} props - properties
 *
 * @returns {JSX.Element}
 */
const ButtonBottom = (props) => {
  const { nextPage, step, pages, selectPage, sendInvoice, getInvoice } =
    useContext(formContext);

  /**
   * Hear click
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - event
   *
   * @returns {void}
   */
  const handleNextPage = (e) => {
    e.preventDefault();
    selectPage(step - 1);
  };

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValue = getInvoice();
    const plan = formValue.plan.find(
      (item) => item.type === formValue.planType
    );
    const pluses = formValue.typeServices.filter(
      (service) => service.type === plan.type
    );

    /**
     * @type {InvoiceSchema}
     */
    const invoice = {
      customerEmail: formValue.customerEmail,
      planName: plan.title,
      planType: plan.type,
      pluses,
      pricePlan: getNumberFromString(plan.description),
    };

    await sendInvoice(invoice);
  };

  return (
    <div className="content-button-bottom">
      {step > 0 ? (
        <>
          <SecondaryButton
            style={{
              fontWeight: "var(--font-weight-3)",
            }}
            onClick={handleNextPage}
          >
            go back
          </SecondaryButton>
        </>
      ) : (
        <></>
      )}
      <div className="blank-space"></div>
      {step + 1 < pages.length ? (
        <>
          <PrimaryButton textButton="next step" onClick={nextPage} />
        </>
      ) : (
        <>
          <PrimaryButton
            textButton="confirm"
            style={{
              backgroundColor: "var(--color-primary-purplish-blue)",
              borderColor: "var(--color-primary-purplish-blue)",
            }}
            onClick={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default ButtonBottom;
