import { useState, useMemo } from "react";

import "./style.css";

import formContext, { defaultValue } from "../../../contexts/form-context";

import FormStep from "../../organisms/formStep";
import PageNavbar from "../../molecules/PageNavbar";
import ButtonBottom from "../../molecules/ButtonBottom";

import {
  handleUpdateOption,
  handleFindInput,
  handleGetFormStatus,
  handleChangePage,
  handleSendInvoice,
} from "../../../utils/selectUtils";

/**
 * @typedef {import('../../atoms/FormInput/index').ChangeEventObj} ChangeEventObj
 * @typedef {import('../../../contexts/form-context').FormContextType} FormContextType
 */

/**
 * Principal page
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  const [state, setState] = useState(defaultValue);
  const [contextState, setContextState] = useState(defaultValue);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  /**
   * Verify if the step is the last item
   *
   * @returns {()=> boolean}
   */
  const isLastPage = () => state.step === state.pages.length - 1;

  /**
   * Verify if the step is the first item
   *
   * @returns {() => boolean}
   */
  const isFirstPage = () => state.step === 0;

  /**
   * Verify if the step has all of data
   *
   * @returns {boolean}
   */
  const isFormPageCompleted = () => {
    const result = state.pages[state.step].inputs.filter((inputItem) => {
      let result = !Boolean(inputItem.value);

      if (result && inputItem.values instanceof Array) {
        result = false;
      }

      return result;
    });

    return result.length === 0;
  };

  /**
   * Change step to the next
   *
   * @returns {void}
   */
  const nextPage = () => {
    if (!isLastPage() && isFormPageCompleted()) {
      setState({
        ...state,
        step: state.step + 1,
      });
    }
  };

  useMemo(() => {
    /**
     * @type {FormContextType}
     */
    const newContextState = {
      ...state,
      isLastPage,
      isFirstPage,
      nextPage,
      handleChange: handleUpdateOption(state, setState),
      getInputValue: handleFindInput(state),
      getInvoice: handleGetFormStatus(state),
      selectPage: handleChangePage(state, setState),
      sendInvoice: handleSendInvoice(state, setState),
    };

    setContextState(newContextState);
  }, [state, setState]);

  useMemo(() => {
    window.addEventListener("resize", (e) => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <formContext.Provider value={contextState}>
        <div className="content">
          <div className="bg-content">
            <div className="bg-img"></div>
            <div
              className="bg-color"
              style={
                state.invoice.isSaved && innerWidth < 1024
                  ? {
                      minHeight: "74vh",
                    }
                  : undefined
              }
            ></div>
          </div>
          <div className="form-content">
            <PageNavbar showPageInfo={innerWidth >= 1024} />
            <FormStep innerWidth={innerWidth} />
            {innerWidth < 1024 ? <div className="white-space"></div> : <></>}
            {state.invoice.isSaved ? (
              <></>
            ) : (
              <>
                <ButtonBottom />
              </>
            )}
          </div>
        </div>
      </formContext.Provider>
    </>
  );
};

export default Main;
