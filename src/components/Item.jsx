import React, { Component } from "react";
import { observer } from "mobx-react";
class Item extends Component {
  constructor() {
    super();
  }
  changingPrice = (e) => {
    if (e.detail === 2) {
      console.log("double click");
      const newPrice = prompt("enter your new price");
      this.props.store.changingPrice(this.props.name, newPrice);
    }
  };
  buyItem = () => {
    this.props.store.buyItem(this.props.name);
  };
  render() {
    return (
      <div>
        <p>
          {this.props.quantity} {this.props.name} available at $
          <span onClick={this.changingPrice}>{this.props.price}</span> per item
          <button onClick={this.buyItem}>Buy now</button>
        </p>
      </div>
    );
  }
}
export default observer(Item);
