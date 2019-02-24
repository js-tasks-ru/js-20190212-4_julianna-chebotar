"use strict";

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement("ul");
  const render = item => {
    const li = document.createElement("li");
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    ul.appendChild(li);
  };

  for (let item of friends) {
    render(item);
  }
  return ul;
}
