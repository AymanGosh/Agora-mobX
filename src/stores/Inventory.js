import { observable, action, makeObservable } from "mobx";

export class Inventory {
  constructor() {
    this.items = [];
    this.length = 0;

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
    });
  }
  addItem = (item) => {};
  buyItem = (item) => {};
  changingPrice = (item, price) => {};

  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
}
