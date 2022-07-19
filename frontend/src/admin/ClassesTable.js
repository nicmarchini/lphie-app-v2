import React from "react";
import ObjectsTable from "../components/EditableTable/ObjectsTable";
import mock_classes from './mocks/MockClasses';

class ClassesTable extends React.Component {
    constructor(props) {
        super(props);

        this.search_field = 'letter'
        this.classes_obj = mock_classes
    }

    render() {
        return (
            <div>
                <ObjectsTable   state_obj={this.classes_obj}
                                searchField={this.search_field}/>
            </div>
        );
    }
}

export default ClassesTable;