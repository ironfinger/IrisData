import { React, Component } from 'react';

// Bootstrap:
import Button from 'react-bootstrap/Button';

class ColumnView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataPresent: false,
            data: []
        }
    }



    whatToRender() {

    }

    render() {
        return(
            <>
                {
                    this.props.data.ColumnNames.map((x, i) => {
                        return <Button variant="primary">{x}</Button>
                    })
                }
            </>
        )
    }
}

export default ColumnView