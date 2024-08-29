/**
 * @function multipleStudiosComaSeparation
 * @description Separate studios that are stored in a single string with commas.
 * @param {array} studios - An array of objects where each object has a "Studios" property.
 * @returns {array} An array of strings where each string is a studio.
 * @example
 * multipleStudiosComaSeparation([
 *   { dataValues: { Studios: "Studio 1, Studio 2" } },
 *   { dataValues: { Studios: "Studio 3" } },
 *   { dataValues: { Studios: "Studio 4, Studio 5" } }
 * ]) // ["Studio 1", "Studio 2", "Studio 3", "Studio 4", "Studio 5"]
 */
const multipleStudiosComaSeparation = (studios) => {
  let studiosArray = [];

  studios.forEach((studio) => {
    const simpleStudio = studio.dataValues.Studios;

    if (!simpleStudio.includes(",")) {
      if (!studiosArray.includes(simpleStudio)) {
        studiosArray.push(simpleStudio);
      }
    } else {
      const simpleStudioArray = simpleStudio.split(",").map((s) => s.trim());

      simpleStudioArray.forEach((studio) => {
        if (!studiosArray.includes(studio)) {
          studiosArray.push(studio);
        }
      });
    }
  });

  return studiosArray;
};

export default multipleStudiosComaSeparation;
