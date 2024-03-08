class Storage {
  #items;
  constructor(items = []) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) {
      this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Неправильна реалізація removeItem: метод removeItem використовує splice безпосередньо з результатом indexOf. Якщо itemToRemove не знайдено, indexOf повертає -1, що змушує splice видаляти останній елемент з масиву, що є неправильною поведінкою. Для виправлення цього, вам слід перевірити, чи елемент існує, перед використанням splice.
