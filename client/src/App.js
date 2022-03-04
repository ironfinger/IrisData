import './App.css'
import { React, Component } from 'react';

// Import my components:
import DataView from './components/DataView';
import ColumnView from './components/ColumnView';
import DataViewV2 from './components/DataViewV2';

// Import React Bootstrap Components:
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

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
			});
		});
	}

	whatToRender() {
		if (this.state.dataPresent === true) {
			return (<>
				<ColumnView data={this.state.data}/>
				<DataViewV2 data={this.state.data} usrColumns={[
					"Name",
					"Type",
					"Consistent"
				]} />
			</>)
		} else {
			return <h1>no data</h1>
		}
	}

	render() {
		return (<>
			
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#">Brand link</Navbar.Brand>
			</Navbar>
			
			{
				this.whatToRender()
			}


		</>)
	}
}

export default App;