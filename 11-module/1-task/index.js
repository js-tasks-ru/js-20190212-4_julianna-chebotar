(function() {
  class Tooltip {
    /**
     * Имя компонента
     * @property {string}
     */
    get name() {
      return "tooltip";
    }

    /**
     * Обязательный отступ
     */
    get indent() {
      return 5;
    }

    constructor() {
      /**
       * Данное свойство содержит ссылку на
       * елемент содержащий подсказку
       * @type {HTMLDivElement}
       */
      this.el = document.createElement("div");
      this.el.style.position = "absolute";

      this.el.classList.add(this.name);
      document.body.appendChild(this.el);

      this.showTooltip = this.showTooltip.bind(this);
      this.hideTooltip = this.hideTooltip.bind(this);
    }

    showTooltip(event) {
      let target = event.target;

      let tooltip = target.getAttribute('data-tooltip');
      if (!tooltip) return;
      
      this.el.classList.add(`${this.name}_active`);
      this.el.innerHTML = tooltip;

      let spanCoords = target.getBoundingClientRect();
      let elCoords = this.el.getBoundingClientRect();

      this.el.style.left = `${spanCoords.left}px`

      let top = spanCoords.bottom + this.indent;
      if (top + elCoords.height > document.documentElement.clientHeight) {
          top = spanCoords.top - elCoords.height - this.indent;
      }
      this.el.style.top = `${top}px`;
    }
    hideTooltip() {
        this.el.classList.remove(`${this.name}_active`);
    }

    /**
     * Метод подключает включает работу подсказок
     * на элементе
     *
     * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
     */
    attach(root) {
      root.querySelectorAll('[data-tooltip]').forEach((elem) => {
        elem.addEventListener('mouseover', this.showTooltip);
        elem.addEventListener('mouseout', this.hideTooltip);
    })
    }

    /**
     * Удаляет все обработчики событий
     */
    detach() {
      document.body.querySelectorAll('[data-tooltip]').forEach((elem) => {
        elem.removeEventListener('mouseover', this.showTooltip);
        elem.removeEventListener('mouseout', this.hideTooltip);
    })
    }
  }

  window.Tooltip = Tooltip;
})();
