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
  for (let i = 0; i < matches.length; i++) {
    matches[i] = +matches[i].replace(",", "");
  }
  const min = Math.min.apply(Math, matches);
  const max = Math.max.apply(Math, matches);
  return { min, max };
}
