import React from 'react';
import EditableField from './EditableField';

class EditableCell extends React.Component {
    render() {
        return (
            <td >
                <EditableField
                    cell={this.props.cell}
                    onTableUpdate={this.props.onTableUpdate}/>
            </td>
        );
    }
}

export default EditableCell