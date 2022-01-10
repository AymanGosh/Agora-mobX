import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import Market from "./components/Market";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
    };
  }
  render() {
    console.log(this.props.store.items[0].name);
    return (
      <div>
        <Market store={this.props.store} />
      </div>
    );
  }
}
export default observer(App);
