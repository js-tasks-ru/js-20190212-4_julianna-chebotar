/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
  let paths = [];

  for (const item in obj) {
    if (typeof obj[item] === "object" && obj[item] !== null) {
      const x = find(obj[item], value);
      if (x !== null) {
        paths.push(item);
        paths[paths.length - 1] = `${paths[paths.length - 1]}.${x}`;
      }
    } else {
      if (obj[item] == value) {
        paths.push(item);
      }
    }
  }

  if (paths.length !== 0) {
    return paths.length === 1 ? paths[0] : paths;
  } else {
    return null;
  }
}
