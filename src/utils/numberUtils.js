/**
 * Search number in string
 * 
 * @param {string} str - string
 * 
 * @returns {number}
 */
export const getNumberFromString = (str) => {
    /**
     * @type {string[]}
     */
    let charNum = [];

    str.split('').forEach(char => {
        const value = Number(char);

        if (!Object.is(value, NaN)) {
            charNum.push(value);
        }
    });

    const result = charNum.length > 0 ? Number(charNum.join('')) : 0;

    return result;
}