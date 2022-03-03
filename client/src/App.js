import './App.css'
import { React, Component } from 'react';

// Import my components:
import DataView from './components/DataView';

import Table from 'react-bootstrap/Table';

class App extends Component {

	constructor(props) {
		super (props);

		this.state = {
			dataPresent: false,
			data: []
		}
	}

	componentDidMount() {
		console.log('MoUNT')
		fetch('/api/get-data', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(res => res.json()).then(data => {
			
			// Set the state:
			this.setState({
				dataPresent: true,
				data: data["data"]
			})

			console.log('State');
			console.log(this.state.data);

		})
	}

	whatToRender() {
		if (this.state.dataPresent == true) {
			return <DataView />
		} else {
			return <h1>no data</h1>
		}
	}

	render() {
		return (<>

			<h1>Hello</h1>
			
			{
				this.whatToRender()
			}


		</>)
	}
}

export default App;