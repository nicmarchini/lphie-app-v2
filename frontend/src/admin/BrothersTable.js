import React from "react";
import ObjectsTable from "../components/EditableTable/ObjectsTable";
import mock_bros from './mocks/MockBrothers';

class BrothersTable extends React.Component {
    constructor(props) {
        super(props);

        this.search_field = 'first'
        this.bro_obj = mock_bros
    }

    render() {
        return (
            <div>
                <ObjectsTable   state_obj={this.bro_obj}
                                searchField={this.search_field}/>
            </div>
        );
    }
}

export default BrothersTable;