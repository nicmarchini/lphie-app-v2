import React from 'react';
import EditableField from './EditableField';

class EditableColumn extends React.Component {

    onDelEvent() {
        this.props.onDelEvent(this.props.object);
    }

    render() {
        let cells = [];
        let row_id = this.props.object.id

        for (let [key, value] of Object.entries(this.props.object.obj)) {
            cells.push(
                <div className="flex place-content-end my-2">
                <div className="mr-2">
                    { key }
                </div>
                <EditableField
                    style={{width:400}}
                    onTableUpdate={this.props.onTableUpdate}
                    cell={{
                        "type": key,
                        value: value,
                        id: row_id
                    }}/>
                </div>
            )
        }

        return (
            <div className="flex flex-col">
                { cells }
            </div>
        );
    }
}

export default EditableColumn;