let calendar = {
  from: new Date("2018-01-01T15:09:10Z"),
  to: new Date("2018-02-01T10:09:10Z")
};

calendar[Symbol.iterator] = function() {
  let current = this.from,
    last = this.to;

  return {
    next() {
      if (current < last) {
        current.setDate(current.getDate() + 1);
        let currentDay = current.getDay();
        let formatedDate = new Intl.DateTimeFormat("ru-RU", {
          day: "2-digit"
        }).format(current);

        return {
          done: false,
          value: ~[0, 6].indexOf(currentDay)
            ? `[${formatedDate}]`
            : `${formatedDate}`
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
};
