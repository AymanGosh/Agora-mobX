import React, { Component } from "react";
import { observer } from "mobx-react";
class Item extends Component {
  constructor() {
    super();
  }
  handleClick = (e) => {
    if (e.detail === 2) {
      console.log("double click");
      const newPrice = prompt("enter your new price");

      this.props.store.changingPrice(this.props.name, newPrice);
    }
  };
  render() {
    return (
      <div>
        <p>
          {this.props.quantity} {this.props.name} available at $
          <span onClick={this.handleClick}>{this.props.price}</span> per item
          <button>Buy now</button>
        </p>
      </div>
    );
  }
}
export default observer(Item);
