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
            <input className="ml-1 px-2 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white
                            hover:bg-blue-700 hover:border-transparent
                            focus:outline-none"
                    onClick={this.onDelEvent.bind(this)}
                    type="button"
                    value="X"/>
            </td>
            </tr>
        );
    }
}

export default EditableRow;