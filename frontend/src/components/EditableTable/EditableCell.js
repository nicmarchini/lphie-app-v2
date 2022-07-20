import React from 'react';

class EditableCell extends React.Component {
    render() {
        return (
            <td>
                <input className='text-md pl-3 py-1'
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