
import React from "react";
import ReactDOM from "react-dom/client";
import Dapp from "./components/Dapp";
import "../css/app.css";

let container = document.getElementById("main");
let root = ReactDOM.createRoot(container ?? "main");
root.render(
	<React.StrictMode>
		<Dapp />
	</React.StrictMode>
);