import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Inventory } from "./stores/Inventory";
import { Item } from "./stores/Item";

let item = new Item("apple", 10, 5);
let agora = new Inventory();
agora.items.push(item);
ReactDOM.render(<App store={agora} />, document.getElementById("root"));

reportWebVitals();
