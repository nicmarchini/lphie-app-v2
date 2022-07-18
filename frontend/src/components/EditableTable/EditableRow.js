import React from 'react';
import EditableCell from './EditableCell';

class EditableRow extends React.Component {

    onDelEvent() {
        this.props.onDelEvent(this.props.object);
    }

    render() {
        let cells = [];
        let row_id = this.props.object.id

        for (let [key, value] of Object.entries(this.props.object.obj)) {
            cells.push(
                <EditableCell
                    onTableUpdate={this.props.onTableUpdate}
                    cell={{
                        "type": key,
                        value: value,
                        id: row_id
                    }}
                />
            )
        }

        return (
            <tr>
                { cells }
                <td>
                    <input
                        type="button"
                        onClick={this.onDelEvent.bind(this)}
                        value="X"
                        />
                </td>
            </tr>
        );
    }
}

export default EditableRow;