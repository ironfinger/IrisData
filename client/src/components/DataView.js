import '../App.css'

// Imports:
import { React, Component } from 'react';

// Import React Bootstrap Components:
import Table from 'react-bootstrap/Table';

class DataView extends Component {
    constructor(props) {
        super(props)
        
        console.log('Data View');
        console.log(props.data);
    }
    
    getRow(index) {
        // Make an array of all the items in each row then possibly display:
        let rowArr = [];
        let columns = this.props.data.ColumnNames
        
        for (let i = 0; i <= columns.length - 1; i++) {
            let columnName = columns[i]
            let columnData = this.props.data[columnName]

            console.log(`Column Name: ${columnName}`)
            console.log(`Column Data: ${columnData}`)
            console.log(`Data at Row: ${columnData[index]}`)
            console.log(`Index: ${index}`)
            

            rowArr.push(columnData[index]);
        }

        return (
            <tr>
                {rowArr.map((x, i) => {
                    return <td>{x}</td>
                })}
            </tr>
        )

    }

    render() {
        return(<>
            <Table>
                <thead>
                    <tr>
                        {
                            this.props.data.ColumnNames.map((x, i) => {
                                return <th>{x}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.Name.map((x, i) => {
                        console.log(`NAME ${x}`)
                        return this.getRow(i)
                    })}
                </tbody>
            </Table>
        </>)
    }
}

export default DataView;

/* <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>

this.state.newPresets.map((x, i) => {
    return <PresetButtonTrain title={x.name} handler={this.newPresetSelect} index={i} addOr='+'/>
}) */


{/* <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table> */}