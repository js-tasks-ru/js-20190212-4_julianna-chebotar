/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let selected = [];
  for (let item of data) {
    if (item.age <= age) {
      selected.push(`${item.name}, ${item.balance}`);
    }
  }
  return selected.join("\n");
}
