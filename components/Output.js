import React from "react";

export class Output extends React.Component {
	constructor(props) {
		super(props);

		this.state = { content: "" };
	}
	
	render() {
		return (
				<div className="side">
					<div className="label">OUTPUT</div>
					<div className="output"
						 dangerouslySetInnerHTML=
						 	{{__html: this.props.content}}>
					</div>
				</div>
			)
	}
}