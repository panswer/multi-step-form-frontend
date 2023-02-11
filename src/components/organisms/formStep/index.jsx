import React, { useContext, useState, useEffect } from "react";

import "./style.css";

import FormTitle from "../../atoms/FormTitle";
import FormDescribe from "../../atoms/FormDescribe";
import FormInputGroup from "../../molecules/FormInputGroup";
import { inputTypes } from "../../atoms/FormInput";
import FormSelectGroup, {
  selectGroupEnum,
} from "../../molecules/FormSelectGroup";
import FormSwitchGroup, {
  formMultiSwitchGroupEnum,
  formSingleSwitchGroupEnum,
} from "../../molecules/FormSwitchGroup";
import FormResum from "../../molecules/FormResum";
import FormResult from "../../molecules/FormResult";

import formContext from "../../../contexts/form-context";
import { getNumberFromString } from "../../../utils/numberUtils";
import iconThankYou from "../../../imgs/icon-thank-you.svg";

/**
 * @typedef {import('../../../utils/selectUtils').LocationOptionObj} LocationOptionObj
 *
 * @typedef {import('../../../contexts/form-context').Option} Option
 *
 * @typedef {import('../../molecules/FormResum').InvoiceSchema} Invoice
 */

/**
 * @typedef {object} FormStepProps
 * @property {number} [innerWidth]
 */

/**
 * Form Step component
 *
 * @param {FormStepProps} props
 *
 * @returns {JSX.Element}
 */
const FormStep = (props) => {
  const {
    step,
    pages,
    handleChange,
    getInputValue,
    getInvoice,
    selectPage,
    invoice,
    sendInvoice,
  } = useContext(formContext);
  const [planType, setPlanType] = useState();

  useEffect(() => {
    setPlanType(getInputValue("name", "planType"));
  }, [pages, getInputValue]);

  if (pages[step]) {
    if (step + 1 === pages.length && invoice.isSaved) {
      return (
        <div
          className="content-form_step"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <FormResult
            icon={{ alternativeText: "Thanks!", source: iconThankYou }}
            description={`Thanks for confirming your subscription!
            We hope you have fun using our
            platform. If you ever need support,
            please feel free to email us at
            ${invoice.invoice.customerEmail}.`}
            title={"Thank you!"}
          />
        </div>
      );
    } else {
      return (
        <div className="content-form_step">
          <form>
            <FormTitle title={pages[step].title} />
            <FormDescribe description={pages[step].description} />
            {pages[step].inputs?.map((input, i) => {
              const { type } = input;
              /**
               * @type {LocationOptionObj}
               */
              const location = {
                inputNum: i,
                pageNum: step,
              };

              if (inputTypes.includes(type)) {
                /**
                 * @type {import('../../../contexts/form-context').FormInputType}
                 */
                const { id, value, label, textExample } = input;

                return (
                  <FormInputGroup
                    inputId={id}
                    value={value}
                    inputLabel={label}
                    key={id}
                    onChange={handleChange(location)}
                    textExample={textExample}
                    inputType={type}
                  />
                );
              } else if (selectGroupEnum.includes(type)) {
                /**
                 * @type {import('../../../contexts/form-context').FormSelectType}
                 */
                const { options, value } = input;

                const optionsRender = options.filter(
                  (option) => option.type === planType
                );

                return (
                  <>
                    <div className="form-select-group-simple">
                      {optionsRender.map((option, i) => (
                        <FormSelectGroup
                          description={option.description}
                          icon={{
                            alt: option.title,
                            url: option.icon,
                          }}
                          title={option.title}
                          key={`${option.group}-${option.title}`}
                          selectStyle={{
                            marginBottom:
                              i !== options.length - 1 ? ".7rem" : "1.5rem",
                          }}
                          selectGroupName={option.group}
                          value={`${option.group}-${option.title}`}
                          onChange={handleChange(location)}
                          isSelected={value === option.title}
                          plus={option.subTitle}
                          innerWidth={props.innerWidth}
                        />
                      ))}
                    </div>
                  </>
                );
              } else if (formSingleSwitchGroupEnum.includes(type)) {
                /**
                 * @type {import('../../../contexts/form-context').FormSingleSwitchType}
                 */
                const { options, type, value, name } = input;

                return (
                  <FormSwitchGroup
                    options={options}
                    type={type}
                    value={value}
                    key={`${location.pageNum}-${type}-${location.inputNum}`}
                    name={name}
                    onChange={handleChange(location)}
                  />
                );
              } else if (formMultiSwitchGroupEnum.includes(type)) {
                /**
                 * @type {import('../../../contexts/form-context').FormMultiSwitchType}
                 */
                const { name, options, values } = input;

                const optionsRender = options.filter(
                  (option) => option.type === planType
                );

                return (
                  <FormSwitchGroup
                    key={`${location.pageNum}-${type}-${location.inputNum}`}
                    name={name}
                    options={optionsRender}
                    type={type}
                    values={values}
                    onChange={handleChange(location)}
                  />
                );
              } else if (type === "invoice") {
                const invoice = getInvoice();

                const resum = {
                  customerEmail: invoice.customerEmail,
                  customerName: invoice.customerName,
                  customerPhone: invoice.customerPhone,
                  plan: invoice.plan
                    .filter((plan) => plan.type === invoice.planType)
                    .pop(),
                  typeService: invoice.typeServices.filter(
                    (service) => service.type === invoice.planType
                  ),
                };

                const pricePlan = getNumberFromString(resum.plan.description);

                return (
                  <FormResum
                    planName={resum.plan.title}
                    planType={resum.plan.type}
                    pluses={resum.typeService.map((service) => ({
                      currencySymbol: "$",
                      price: service.price,
                      serviceName: service.title,
                    }))}
                    key={`${step}-${resum.plan.type}`}
                    pricePlan={{
                      currency: "$",
                      price: pricePlan,
                      type: resum.plan.type,
                    }}
                    selectPage={selectPage}
                    submitFn={sendInvoice}
                  />
                );
              } else {
                return (
                  <div
                    key={`${location.pageNum}-${type}-${location.inputNum}`}
                    className="input-not-found"
                  >
                    <h2>Not Found</h2>
                    <h4>The input is not found</h4>
                  </div>
                );
              }
            })}
          </form>
        </div>
      );
    }
  } else {
    return (
      <div className="content-form_step">
        <div>
          <FormTitle title="404" />
          <FormDescribe description="Component Not Found!" />
        </div>
      </div>
    );
  }
};

export default FormStep;
