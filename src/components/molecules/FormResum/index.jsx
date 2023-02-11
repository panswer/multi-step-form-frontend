import { useEffect, useState } from "react";
import FormTitle from "../../atoms/FormTitle";
import LabelPrice from "../../atoms/LabelPrice";
import FormDescribe from "../../atoms/FormDescribe";
import SecondaryButton from "../../atoms/SecundaryButton";
import "./style.css";

/**
 * @typedef {object} FormResurmPlus
 * @property {string} serviceName
 * @property {string} price
 * @property {string} currencySymbol
 */

/**
 * @typedef {object} PricePlan
 * @property {string} currency
 * @property {number} price
 * @property {string} type
 */

/**
 * @typedef {object} InvoiceSchema
 * @property {string} planName
 * @property {string} planType
 * @property {Array<FormResurmPlus>} pluses
 * @property {PricePlan} pricePlan
 * @property {string} customerEmail
 */

/**
 * @typedef {object} FormResurmProps
 * @property {string} planName
 * @property {string} planType
 * @property {Array<FormResurmPlus>} pluses
 * @property {PricePlan} pricePlan
 * @property {(step: number) => void} selectPage
 * @property {(invoice: InvoiceSchema)=>Promise<InvoiceSchema>} submitFn
 */

/**
 * Form resurm component
 *
 * @param {FormResurmProps} props - properties
 *
 * @returns {JSX.Element}
 */
const FormResurm = (props) => {
  const [shortPlanType, setShortPlanType] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newShortPlanType = props.planType === "monthly" ? "mon" : "year";
    let newTotal = [
      props.pricePlan.price,
      ...props.pluses.map((plus) => plus.price),
    ].reduce((previousValue, currentValue) => previousValue + currentValue);

    setShortPlanType(newShortPlanType);
    setTotal(newTotal);
  }, [props]);

  return (
    <div className="resurm-component">
      <div className="invoice-details">
        <div className="plan-type">
          <FormTitle
            title={`${props.planName} (${props.planType})`}
            style={{
              textTransform: "capitalize",
              fontSize: ".9rem",
              marginBottom: 0,
            }}
          />
          <LabelPrice
            symbolPrice={props.pricePlan.currency}
            type={shortPlanType}
            style={{
              color: "var(--color-primary-marine-blue)",
              justifySelf: "end",
              alignSelf: "center",
              fontWeight: "var(--font-weight-3)",
            }}
          >
            {props.pricePlan.price}
          </LabelPrice>
          <div className="btn-change">
            <SecondaryButton
              style={{
                textDecoration: "underline",
              }}
              onClick={(e) => {
                props.selectPage(1);
              }}
            >
              change
            </SecondaryButton>
          </div>
        </div>
        <div className="plus-servive">
          {props.pluses.map((plus) => (
            <div className="plus" key={`${props.planName}-${plus.serviceName}`}>
              <FormDescribe
                description={plus.serviceName}
                style={{
                  marginBottom: 0,
                  fontSize: ".9rem",
                }}
              />
              <LabelPrice
                symbolPrice={plus.currencySymbol}
                type={shortPlanType}
                style={{
                  color: "var(--color-primary-marine-blue)",
                  justifySelf: "end",
                }}
              >
                {plus.price}
              </LabelPrice>
            </div>
          ))}
        </div>
      </div>
      <div className="invoice-total">
        <FormDescribe
          description={`Total (per ${props.planType})`}
          style={{
            marginBottom: 0,
          }}
        />
        <LabelPrice
          symbolPrice={props.pricePlan.currency}
          type={shortPlanType}
          style={{
            fontSize: "1.2rem",
          }}
        >
          {total}
        </LabelPrice>
      </div>
    </div>
  );
};

export default FormResurm;
