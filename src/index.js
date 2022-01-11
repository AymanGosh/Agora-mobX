import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import reportWebVitals from "./reportWebVitals";
import { Inventory } from "./stores/Inventory";
import { Item } from "./stores/Item";

let item = new Item("apple", 10, 5);
let store = new Inventory();
store.items.push(item);
const stores = {
  store,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
