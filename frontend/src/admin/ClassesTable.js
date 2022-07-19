import React from "react";
import ObjectsTable from "../components/EditableTable/ObjectsTable";

class ClassesTable extends React.Component {
    constructor(props) {
        super(props);

        this.search_field = 'field1'
        this.schema = [
            'field1',
            'field2',
            'field3',
            'field4'
        ]
        this.classes_obj = [
            {
                id: 1,
                obj: {
                    field1: 'alphas',
                    field2: 'mock field',
                    field4: 1,
                    field3: 'mock field'
                }
            },
            {
                id: 2,
                obj: {
                    field1: 'mockbetyasield',
                    field2: 'mock field',
                    field4: 1,
                    field3: 'mock field'
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <ObjectsTable   state_obj={this.classes_obj}
                                searchField={this.search_field}
                                schema={this.schema}/>
            </div>
        );
    }
}

export default ClassesTable;