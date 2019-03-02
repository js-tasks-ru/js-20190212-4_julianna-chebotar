"use strict";

/**
 * @param {Element} table collection of rows
 * @param {string} title title of desired cell header
 * @returns {number} number of a column with the title
 */
function findTableColumn(table, title) {
  let t = [...table],
    cell;
  for (let i = 0; i < t.length; i++) {
    let row = [...t[i].cells];
    let j = 0;
    for (let td of row) {
      td.innerText.indexOf(title) !== -1 ? (cell = j) : false;
      j++;
    }
  }
  return cell;
}

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableRows = [...table.rows],
    tableHeader = tableRows.splice(0, 1),
    tableBody = tableRows.slice(0),
    statusCell = findTableColumn(tableHeader, "Status"),
    genderCell = findTableColumn(tableHeader, "Gender"),
    ageCell = findTableColumn(tableHeader, "Age");

  for (let row of tableBody) {
    let currentRow = [...row.cells];

    // setting table acording to status cell
    const statusAttr = currentRow[statusCell].getAttribute("data-available");
    statusAttr === null
      ? row.setAttribute("hidden", "")
      : statusAttr === "true"
      ? row.classList.add("available")
      : row.classList.add("unavailable");

    // setting table acording to gender cell
    const genderValue = currentRow[genderCell].innerText;
    genderValue === "f"
      ? row.classList.add("female")
      : row.classList.add("male");

    // setting table acording to age cell
    const ageValue = currentRow[ageCell].innerText;
    ageValue < 18 ? (row.style.textDecoration = "line-through") : false;
  }
}
