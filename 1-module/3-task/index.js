"use strict";

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const string = str.replace(/,/g, " ");
  var regex = /[\d|,|.|e|E|\-]+/g;
  var matches = string.match(regex);
  // let minMax = {};
  for (let i = 0; i < matches.length; i++) {
    matches[i] = +matches[i].replace(",", "");
  }
  // minMax.min = Math.min.apply(Math, matches);
  // minMax.max = Math.max.apply(Math, matches);
  const min = Math.min.apply(Math, matches);
  const max = Math.max.apply(Math, matches);
  return { min, max };
}
