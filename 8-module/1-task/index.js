"use strict";

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement("table");

  const createTablePart = (items, tablePart) => {
    let partTag = document.createElement(tablePart);
    for (let i = 0; i < items.length; i++) {
      let tr = document.createElement("tr");

      for (let item of Object.keys(items[i])) {
        let td = document.createElement("td");
        td.innerHTML = items[i][item];
        tr.appendChild(td);
      }
      partTag.appendChild(tr);
    }
    return partTag;
  };
  let thead = document.createElement("thead");
  thead.innerHTML = `<tr><td>Name</td><td>Age</td><td>Salary</td><td>Country</td></tr>`;
  let tbody = createTablePart(items, "tbody");
  this.el.appendChild(thead);
  this.el.appendChild(tbody);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = function(column, desc = false) {
    const rows = this.el.rows;
    let i, x, y;
    for (i = 1; i < rows.length - 1; i++) {
      x =
        column === 2
          ? Number(rows[i].cells[column].innerHTML)
          : rows[i].cells[column].innerHTML.toLowerCase();
      y =
        column === 2
          ? Number(rows[i + 1].cells[column].innerHTML)
          : rows[i + 1].cells[column].innerHTML.toLowerCase();
      console.log(x, y);
      if (desc && x < y) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      } else if (!desc && x > y) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      }
    }
  };
}
