import { createContext } from "react";

import iconArcade from "../imgs/icon-arcade.svg";
import iconAdvanced from "../imgs/icon-advanced.svg";
import iconPro from "../imgs/icon-pro.svg";

/**
 * @typedef {import('../components/atoms/FormInput/index').ChangeEventObj} ChangeEventObj
 */

/**
 * @typedef {import('../components/atoms/FormInput/index').InputTypeEnum} FormInputTypeEnum
 *
 * @typedef {import('../components/molecules/FormSelectGroup/index').SelectGroupEnum} SelectGroupEnum
 *
 * @typedef {import('../components/molecules/FormSwitchGroup/index').FormSingleSwitchGroupProps} FormSingleSwitchType
 *
 * @typedef {import('../components/molecules/FormSwitchGroup/index').FormMultiSwitchGroupProps} FormMultiSwitchType
 *
 * @typedef {import('../utils/selectUtils').ChangeInputProps} ChangeInputProps
 *
 * @typedef {import('../utils/selectUtils').GenericInvoice} GenericInvoice
 *
 * @typedef {import('../components/molecules/FormResum').InvoiceSchema} InvoiceSchema
 */

/**
 * @typedef {object} InvoiceUnsave
 * @property {false} isSaved
 *
 * @typedef {object} InvoiceSave
 * @property {true} isSaved
 * @property {InvoiceSchema} invoice
 *
 * @typedef {InvoiceSave | InvoiceUnsave} Invoice
 */

/**
 * @typedef {object} FormInputType
 * @property {string} label
 * @property {string} [value]
 * @property {string} id
 * @property {string} [textExample]
 * @property {FormInputTypeEnum} type
 * @property {string} [name]
 */

/**
 * @typedef {object} Option
 * @property {string} description
 * @property {string} title
 * @property {string} icon
 * @property {string} group
 * @property {string} [subTitle]
 * @property {string} [type]
 */

/**
 * @typedef {object} FormSelectType
 * @property {SelectGroupEnum} type
 * @property {string} [value]
 * @property {Array<Option>} options
 * @property {string} [name]
 */

/**
 * @typedef {object} FormResurmType
 * @property {"invoice"} type
 */

/**
 * @typedef {FormInputType | FormSelectType | FormSingleSwitchType | FormMultiSwitchType | FormResurmType} FormItemType
 */

/**
 * @typedef {object} FormContextItemType
 * @property {string} title
 * @property {string} description
 * @property {Array<FormItemType>} inputs
 */

/**
 * @typedef {object} FormContextType
 * @property {number} step
 * @property {Array<FormContextItemType>} pages
 * @property {Invoice} invoice
 * @property {()=>void} nextPage
 * @property {()=>boolean} isLastPage
 * @property {()=>boolean} isFirstPage
 * @property {(location: LocationOptionObj) => ((e: React.ChangeEvent<HTMLInputElement>, changeInput?: ChangeInputProps) => void)} handleChange
 * @property {(inputAttribute: string, inputValue: any) => any} getInputValue
 * @property {() => GenericInvoice} getInvoice
 * @property {(step: number) => void} selectPage
 * @property {(invoice: InvoiceSchema) => Promise<InvoiceSchema>} sendInvoice
 */

/**
 * @type {FormContextType}
 */
export const defaultValue = {
  step: 0,
  pages: [
    {
      title: "Personal info",
      description:
        "Please provider your name, email address, and phone number.",
      inputs: [
        {
          label: "name",
          id: "inputName",
          textExample: "e.g. Stephen King",
          type: "text",
          name: "customerName",
        },
        {
          label: "email address",
          id: "inputEmail",
          textExample: "e.g. stephenking@lorem.com",
          type: "email",
          name: "customerEmail",
        },
        {
          label: "phone number",
          id: "inputPhoneNumber",
          textExample: "e.g. +1 234 567 890",
          type: "text",
          name: "customerPhone",
        },
      ],
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
      inputs: [
        {
          type: "radio",
          value: "arcade",
          name: "plan",
          options: [
            {
              description: "$9/mo",
              icon: iconArcade,
              title: "arcade",
              group: "plan",
              type: "monthly",
            },
            {
              description: "$12/mo",
              group: "plan",
              icon: iconAdvanced,
              title: "advanced",
              type: "monthly",
            },
            {
              description: "$15/mo",
              group: "plan",
              icon: iconPro,
              title: "pro",
              type: "monthly",
            },
            {
              description: "$90/mo",
              icon: iconArcade,
              title: "arcade",
              group: "plan",
              subTitle: "2 months free",
              type: "yearly",
            },
            {
              description: "$120/mo",
              group: "plan",
              icon: iconAdvanced,
              title: "advanced",
              subTitle: "2 months free",
              type: "yearly",
            },
            {
              description: "$150/mo",
              group: "plan",
              icon: iconPro,
              title: "pro",
              subTitle: "2 months free",
              type: "yearly",
            },
          ],
        },
        {
          type: "single-switch",
          options: ["monthly", "yearly"],
          value: "monthly",
          name: "planType",
        },
      ],
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience",
      inputs: [
        {
          type: "multi-switch",
          name: "typeServices",
          options: [
            {
              description: "Access to multiplayer games",
              price: 1,
              title: "Online service",
              type: "monthly",
            },
            {
              description: "Extra 1TB of cloud save",
              price: 2,
              title: "Larger storage",
              type: "monthly",
            },
            {
              description: "Custom theme on yout profile",
              price: 2,
              title: "Customizable profile",
              type: "monthly",
            },
            {
              description: "Access to multiplayer games",
              price: 10,
              title: "Online service",
              type: "yearly",
            },
            {
              description: "Extra 1TB of cloud save",
              price: 20,
              title: "Larger storage",
              type: "yearly",
            },
            {
              description: "Custom theme on your profile",
              price: 20,
              title: "Customizable profile",
              type: "yearly",
            },
          ],
          values: [],
        },
      ],
    },
    {
      description: "Double-check everything looks OK before confirming",
      title: "Finishing up",
      inputs: [
        {
          type: "invoice",
        },
      ],
    },
  ],
  invoice: {
    isSaved: false,
  },
  nextPage: function () {},
  isLastPage: function () {},
  isFirstPage: function () {},
  handleChange: function (_location) {
    return (_e, _changeInput) => {
      console.warn("Handle change is really good");
    };
  },
  getInputValue: function (_inputAttribute, _inputValue) {},
  getInvoice: function () {},
  selectPage: function (step) {},
  sendInvoice: function (invoice) {},
};

export default createContext(defaultValue);
