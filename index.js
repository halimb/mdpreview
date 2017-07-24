import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import { Input } from "./components/Input.js";
import { Output } from "./components/Output.js"
import "./styles/style.scss";

class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {content: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(text) {
		this.setState({content: marked(text)});
	}

	render() {
		return (
			<div className="container">
				<Input handleChange={this.handleChange}/>
				<Output content={this.state.content}/>
			</div>
		)
	}
}


ReactDOM.render(
		<Panel/>,
		document.getElementById("app")
	)
