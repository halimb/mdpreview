import React from "react";
import ReactDOM from "react-dom";
import { Input } from "./components/text-input.js";
import "./styles/style.scss";



ReactDOM.render(
	<div className="panel">
		<Input/>
		<div className="side output">
		</div>
	</div>,
	document.getElementById("app")
)
