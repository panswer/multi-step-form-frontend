import { selectGroupEnum } from '../components/molecules/FormSelectGroup'
import { inputGroupEnum } from '../components/molecules/FormInputGroup'
import { formSingleSwitchGroupEnum, formMultiSwitchGroupEnum } from '../components/molecules/FormSwitchGroup'

/**
 * @typedef {import('../contexts/form-context').FormContextType} FormContextType
 * 
 * @typedef {import('../contexts/form-context').FormContextItemType} FormContextItemType
 * 
 * @typedef {import('../contexts/form-context').FormSelectType} FormSelectType
 * 
 * @typedef {import('../contexts/form-context').Option} Option
 * 
 * @typedef {import('../contexts/form-context').FormInputType} FormInputType
 * 
 * @typedef {import('../contexts/form-context').FormSingleSwitchType} FormSingleSwitchType
 * 
 * @typedef {import('../contexts/form-context').FormMultiSwitchType} FormMultiSwitchType
 * 
 * @typedef {import('../contexts/form-context').FormItemType} FormItemType
 * 
 * @typedef {import('../contexts/form-context').InvoiceSchema} InvoiceSchema
 */

/**
 * @typedef {object} ChangeInputProps
 * @property {FormInputType} newInput
 * @property {LocationOptionObj} location
 */

/**
 * @typedef {object} LocationOptionObj
 * @property {number} pageNum
 * @property {number} inputNum
 */

/**
 * @typedef {object} GenericInvoice
 * @property {string} customerEmail
 * @property {string} customerName
 * @property {string} customerPhone
 * @property {Array<Option>} plan
 * @property {string} planType
 * @property {Array<Option>} typeServices
 */

/**
 * 
 * @param {FormContextType} state 
 * @param {(newState: FormContextType)=>void} setState 
 * 
 * @returns {(location: LocationOptionObj) => ((e: React.ChangeEvent<HTMLInputElement>) => void)}
 */
const updateOption = (state, setState) => {
    /**
     * 
     * @param {LocationOptionObj} location 
     * 
     * @returns {(e: React.ChangeEvent<HTMLInputElement>, changeInput?: ChangeInputProps) => void}
     */
    const buildUpdate = location => {
        return (e, changeInput) => {
            /**
             * @type {FormContextType}
             */
            const newState = {
                ...state,
                pages: state.pages.map((pageItem, i) => {
                    if (i === location.pageNum) {
                        /**
                         * @type {FormContextItemType}
                         */
                        const newPage = {
                            ...pageItem,
                            inputs: pageItem.inputs.map((inputItem, j) => {
                                if (j === location.inputNum && selectGroupEnum.includes(inputItem.type)) {
                                    /**
                                     * @type {FormSelectType}
                                     */
                                    const newInput = {
                                        ...inputItem,
                                        value: e.target.id
                                    }

                                    return newInput;
                                } else if (j === location.inputNum && inputGroupEnum.includes(inputItem.type) && inputItem.id === e.target.id) {
                                    /**
                                     * @type {FormInputType}
                                     */
                                    const newInput = {
                                        ...inputItem,
                                        value: e.target.value
                                    }

                                    return newInput;
                                } else if (j === location.inputNum && formSingleSwitchGroupEnum.includes(inputItem.type)) {
                                    /**
                                     * @type {FormSingleSwitchType}
                                     */
                                    const newInput = {
                                        ...inputItem,
                                        value: inputItem.options[Number(e.target.checked)]
                                    }

                                    return newInput;
                                } else if (j === location.inputNum && formMultiSwitchGroupEnum.includes(inputItem.type)) {
                                    /**
                                     * @type {FormMultiSwitchType}
                                     */
                                    let newInput = {
                                        ...inputItem,
                                    };
                                    const { 2: serviceName } = e.target.id.split('-');

                                    if (e.target.checked) {
                                        newInput.values.push(serviceName)
                                    } else {
                                        newInput = {
                                            ...newInput,
                                            values: newInput.values.filter(value => value !== serviceName)
                                        }
                                    }

                                    return newInput;
                                } else if (changeInput?.location?.inputNum === j) {
                                    return changeInput.newInput;
                                } else {
                                    return inputItem;
                                }
                            })
                        };

                        return newPage
                    } else if (i === changeInput?.location?.pageNum) {

                        /**
                         * @type {FormContextItemType}
                         */
                        const newPage = {
                            ...pageItem,
                            inputs: pageItem.inputs.map((inputItem, j) => {
                                if (changeInput.location.inputNum === j) {
                                    return changeInput.newInput;
                                } else {
                                    return inputItem;
                                }
                            })
                        };

                        return newPage
                    } else {
                        return pageItem;
                    }
                })
            }

            setState(newState);
        }
    }

    return buildUpdate;
}

/**
 * Find a input by attribute value
 * 
 * @param {FormContextType} state 
 * 
 * @returns {(inputAttribute: string, inputValue: any) => any}
 */
const getInput = (state) => {
    /**
     * Build a search input by name
     * 
     * @param {string} inputAttribute
     * @param {any} inputValue
     * 
     * @returns {any|undefined}
     */
    const buildFind = (inputAttribute, inputValue) => {
        let result;

        state.pages.forEach(page => {
            page.inputs?.forEach(input => {
                if (Object.keys(input).includes(inputAttribute) && input[inputAttribute] === inputValue) {
                    result = input.value ?? input.values;
                }
            })
        })

        return result;
    }

    return buildFind
}

/**
 * Build to get the form's statein a simple json
 * 
 * @param {FormContextType} state 
 * 
 * @returns {() => GenericInvoice}
 */
const getInvoice = (state) => {

    /**
     * Get the status form as simple json
     * 
     * @returns {object}
     */
    const buildGet = () => {
        const result = {};

        state.pages.forEach(pageItem => {
            pageItem?.inputs.map((inputItem) => {
                if (inputGroupEnum.includes(inputItem.type)) {
                    Object.assign(result, { [inputItem.name]: inputItem.value })
                }

                if (selectGroupEnum.includes(inputItem.type)) {
                    const options = inputItem.options.filter(option => option.title === inputItem.value);

                    Object.assign(result, { [inputItem.name]: options })
                }

                if (formSingleSwitchGroupEnum.includes(inputItem.type)) {
                    Object.assign(result, { [inputItem.name]: inputItem.value })
                }

                if (formMultiSwitchGroupEnum.includes(inputItem.type)) {
                    const options = inputItem.options.filter(option => inputItem.values.includes(option.title.split(' ').join('_')))

                    Object.assign(result, { [inputItem.name]: options })
                }
            })
        })

        return result
    }

    return buildGet
}

/**
 * Build action to skip between pages
 * 
 * @param {FormContextType} state 
 * @param {(inputAttribute: string, inputValue: any) => any} setState 
 * 
 * @returns {(page: number) => void}
 */
const selectPage = (state, setState) => {
    return (page) => {
        /**
         * @type {FormContextType}
         */
        const newState = {
            ...state,
            step: state.pages.length > page ? page : state.step
        }

        setState(newState);
    }
}

/**
 * Build action to send form invoice
 * 
 * @param {FormContextType} state 
 * @param {(inputAttribute: FormContextType) => void} setState 
 * 
 * @returns {(invoice: InvoiceSchema) => Promise<InvoiceSchema>}
 */
const sendInvoice = (state, setState) => {
    return async (invoice) => {
        const newState = {
            ...state,
            invoice: {
                isSaved: true,
                invoice
            }
        }

        await new Promise(resolve => {
            setTimeout(resolve, 1000)
        });

        setState(newState);
    }
}

export const handleUpdateOption = updateOption;

export const handleFindInput = getInput;

export const handleGetFormStatus = getInvoice;

export const handleChangePage = selectPage;

export const handleSendInvoice = sendInvoice;