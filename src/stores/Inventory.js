import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class Inventory {
  constructor() {
    this.items = [];
    this.length = 0;

    makeObservable(this, {
      items: observable,
      length: observable,
      addItem: action,
      buyItem: action,
      changingPrice: action,
    });
  }
  addItem = (name, price = 0, quantity = 1) => {
    let item = this.list.find((i) => i.name === name);
    if (item) {
      item.quantity += 1;
    } else {
      let newItem = new Item("corn", price, quantity);
      this.list.push(newItem);
    }
  };
  buyItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    if (item) {
      item.quantity -= 1;
      if (item.quantity < 1) {
        this.list = this.list.filter((i) => i.name != item.name);
      }
    }
  };
  changingPrice = (name, price) => {
    let item = this.list.find((i) => i.name === name);
    if (item) {
      item.price = price;
    }
  };

  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
}
