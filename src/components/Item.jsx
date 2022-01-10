import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.quantity} {this.props.name} available at $
          {this.props.price} per item
        </p>
      </div>
    );
  }
}
