import React from "react";

export class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = { content: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.handleChange(event.target.value);
	}

	render() {
		return (
			<div className="side">
				<div className="label">INPUT</div>
				<div className="panel">
					<textarea onChange={this.handleChange}/>
				</div>
			</div>);
	}
}