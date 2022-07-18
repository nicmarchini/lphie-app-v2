import React from 'react';

class EditableCell extends React.Component {
    render() {
        return (
            <td>
                <input
                    type='text'
                    name={this.props.cell.type}
                    id={this.props.cell.id}
                    value={this.props.cell.value}
                    onChange={this.props.onTableUpdate}/>
            </td>
        );
    }
}

export default EditableCell