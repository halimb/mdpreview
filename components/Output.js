import React from "react";

export class Output extends React.Component {
	constructor(props) {
		super(props);

		this.state = { content: "" };
	}
	
	render() {
		return (
				<div className="side output">
					{this.props.content}
				</div>
			)
	}
}