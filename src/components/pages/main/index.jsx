import { useState } from "react";

import "./style.css";

import formContext, { defaultValue } from "../../../contexts/form-context";

import FormStep from "../../organisms/formStep";
import PageNavbar from "../../molecules/PageNavbar";
import ButtonBottom from "../../molecules/ButtonBottom";

/**
 * @typedef {import('../../atoms/FormInput/index').ChangeEventObj} ChangeEventObj
 */

/**
 * Principal page
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  const [state, setState] = useState(defaultValue);

  /**
   * Verify if the step is the last item
   *
   * @returns {()=> boolean}
   */
  const isLastPage = () => state.step === state.pages.length - 1;

  /**
   * Verify if the step has all of data
   *
   * @returns {boolean}
   */
  const isFormPageCompleted = () => {
    const result = state.pages[state.step].inputs.filter(
      (inputItem) => !Boolean(inputItem.value)
    );

    return result.length === 0;
  };

  /**
   * Change step to the next
   *
   * @returns {void}
   */
  const nextPage = () => {
    console.log("#".repeat(50));
    if (!isLastPage() && isFormPageCompleted()) {
      setState({
        ...state,
        step: state.step + 1,
      });
    }
  };

  /**
   * Change value on input
   *
   * @param {ChangeEventObj} e - event
   *
   * @returns {void}
   */
  const handleChange = (e) => {
    /**
     * @type {import('../../../contexts/form-context').FormContextType}
     */
    const newState = {
      ...state,
      pages: state.pages.map((page, i) => {
        if (i === state.step) {
          return {
            ...page,
            inputs: page.inputs.map((inputItem) => {
              if (inputItem.id === e.target.id) {
                return {
                  ...inputItem,
                  value: e.target.value,
                };
              } else {
                return inputItem;
              }
            }),
          };
        } else {
          return page;
        }
      }),
    };

    setState(newState);
  };

  return (
    <>
      <formContext.Provider
        value={{
          ...state,
          isLastPage,
          nextPage,
          handleChange,
        }}
      >
        <div className="content">
          <div className="bg-content">
            <div className="bg-img"></div>
            <div className="bg-color"></div>
          </div>
          <div className="form-content">
            <PageNavbar />
            <FormStep />
            <div className="white-space"></div>
            <ButtonBottom />
          </div>
        </div>
      </formContext.Provider>
    </>
  );
};

export default Main;
