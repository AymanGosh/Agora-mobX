import React, { Component } from "react";
import Item from "./Item";
import { observer } from "mobx-react";

class Market extends Component {
  constructor() {
    super();
    this.state = { name: "", price: 0, quantity: 0 };
  }

  handleChange = (event) => {
    if (event.target.name === "name")
      this.setState({ name: event.target.value });
    if (event.target.name === "price")
      this.setState({ price: event.target.value });
    if (event.target.name === "quantity")
      this.setState({ quantity: event.target.value });
  };

  addItem = (event) => {
    this.props.store.addItem(
      this.state.name,
      parseInt(this.state.price),
      parseInt(this.state.quantity)
    );
  };
  render() {
    return (
      <div>
        Name:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        Price:
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
        />
        Quantity
        <input
          type="number"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.items.map((l, index) => (
          <Item
            key={index}
            name={l.name}
            price={l.price}
            quantity={l.quantity}
            store={this.props.store}
          />
        ))}
      </div>
    );
  }
}
export default observer(Market);
