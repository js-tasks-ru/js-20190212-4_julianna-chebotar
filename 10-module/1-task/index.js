(function() {
  "use strict";

  /**
   * Компонент, который реализует таблицу
   * с возможностью удаления строк
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
  class ClearedTable {
    constructor(data) {
      this.el = document.createElement("table");
      this.el.classList += "pure-table";
      this.data = data;
      this.createTHead();
      this.createTbody();
      this.el.onclick = e => {
        let target = e.target;
        if (target.getAttribute("href") == "#delete") {
          deleteRow(target, this);
        }
      };
    }

    createTHead() {
      let thead = document.createElement("thead");
      thead.innerHTML = `<tr>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
                <td>City</td>
                <td></td>
            </tr>`;
      this.el.appendChild(thead);
    }

    createTbody() {
      let body = document.createElement("tbody");
      this.data.forEach(function(item, i, arr) {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td>
        <a 
        href="#delete" 
        data-id=${item.id}>
        x
        <a/>
        </td>`;
        body.appendChild(row);
      });
      return this.el.appendChild(body);
    }

    /**
     * Метод который выщывается после удалении строки
     * @param {number} id - идентификатор удаляемого пользователя
     */
    onRemoved(id) {
      console.log(`Из таблицы удален пользователь ${id}`);
    }
  }

  window.ClearedTable = ClearedTable;

  function deleteRow(element, table) {
    element.parentNode.parentNode.remove();
    let dataId = +element.getAttribute("data-id");
    table.onRemoved(dataId);
  }
})();
