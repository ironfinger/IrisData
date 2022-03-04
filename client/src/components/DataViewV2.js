import '../App.css'

// Imports:
import { React, Component } from 'react';

// Import React Bootstrap Components:
import Table from 'react-bootstrap/Table';

class DataViewV2 extends Component {
    constructor(props) {
        super(props);
    }

    getRow(index) {
        // Make an array of all the items in each row according to the columns:

        console.log(`Chosen Columns: ${this.props.usrColumns}`)

        let rowArr = [];
        let columns = this.props.usrColumns;

        for (let i = 0; i <= columns.length - 1; i++) {
            let columnName = columns[i];
            let columnData = this.props.data[columnName]

            let dataPush = null; // Holds the value of what we want to push.

            if (columnData[index] === false) {
                dataPush = 'false';
            } else if (columnData[index] === true) {
                dataPush = 'true';
            } else {
                dataPush = columnData[index]
            }

            rowArr.push(dataPush);
        }

        return (
            <tr>
                {
                    rowArr.map((x, i) => {
                        return (<td>{x}</td>)
                    })
                }
            </tr>
        )
    }

    render() {
        return(<>
            <Table>
                <thead>
                    <tr>
                        {
                            this.props.usrColumns.map((x, i) => {
                                return <th>{x}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.Name.map((x, i) => {
                            return this.getRow(i)
                        })
                    }
                </tbody>
            </Table>
        </>)
    }
}

export default DataViewV2;