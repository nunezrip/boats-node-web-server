import React, { Component } from 'react';

class App extends Component {
	state = {
		boats: [],
	};

	componentDidMount() {
		fetch('/boats')
			.then(res => res.json())
			.then(boats => {
				return this.setState({ boats });
			});
	}

	render() {
		console.log(this.state.boats);
		return (
			<div>
				{this.state.boats.map(boat => {
					return <p key={boat.id}>{boat.model}</p>;
				})}
			</div>
		);
	}
}

export default App;
