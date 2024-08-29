/**
 * @function groupByLetter
 * @description Group an array of strings by their first letter. If the first letter is not a letter, it is grouped under "#".
 * @param {array} array - The array of strings to group.
 * @returns {object} An object where the keys are the letters and the values are the corresponding arrays of strings.
 * @example
 * groupByLetter(["Apple", "Banana", "Orange", "1st"]) // {A: ["Apple"], B: ["Banana"], O: ["Orange"], #: ["1st"]}
 */
function groupByLetter(array) {
  //
  let newObject = {};

  array.forEach((item) => {
    let firstLetter = item[0].toUpperCase();

    if (!/^[A-Z]$/.test(firstLetter)) {
      firstLetter = "#";
    }

    if (!newObject[firstLetter]) {
      newObject[firstLetter] = [];
    }

    newObject[firstLetter].push(item);
  });

  return newObject;
}

export default groupByLetter;
