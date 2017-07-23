import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";

class App extends React.Component {
	render() {
		return (
			<div style={{
					float: "right",
					color: "#fff",
					width: "10vw",
					height: "10vw",
					textAlign: "center",
					backgroundColor: "#000",
					border: "2px solid white",
					}}>
				<h1>
					{Date.now() % 1000}
				</h1>
			</div>);
	}
}

ReactDOM.render(
	<div className="app">
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
		<App/>
	</div>,
	document.getElementById("app")
)
