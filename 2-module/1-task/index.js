/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let cloneObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      cloneObj[key] = clone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}
