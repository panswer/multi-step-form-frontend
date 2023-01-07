import React, { createContext } from "react";

/**
 * @typedef {import('../components/atoms/FormInput/index').ChangeEventObj} ChangeEventObj
 */

/**
 * @typedef {object} FormInputType
 * @property {string} label
 * @property {string} [value]
 * @property {string} id
 * @property {string} [textExample]
 */

/**
 * @typedef {object} FormContextItemType
 * @property {string} title
 * @property {string} description
 * @property {Array<FormInputType>} inputs
 */

/**
 * @typedef {object} FormContextType
 * @property {number} step
 * @property {Array<FormContextItemType>} pages
 * @property {()=>void} nextPage
 * @property {()=>boolean} isLastPage
 * @property {(e: ChangeEventObj)=>void} handleChange
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
        },
        {
          label: "email address",
          id: "inputEmail",
          textExample: "e.g. stephenking@lorem.com",
        },
        {
          label: "phone number",
          id: "inputPhoneNumber",
          textExample: "e.g. +1 234 567 890",
        },
      ],
    },
    {
      title: "example",
      description: "test",
      inputs: [],
    },
  ],
  nextPage: function () {},
  isLastPage: function () {},
  handleChange: function (_e) {
    console.warn("Handle change is really good");
  },
};

export default createContext(defaultValue);
