import React from 'react';

class EditableField extends React.Component {
    render() {
        return (
            <input  className='text-md pl-3 py-1'
                    style={this.props.style ? this.props.style : {}}
                    onChange={this.props.onTableUpdate}
                    name={this.props.cell.type}
                    id={this.props.cell.id}
                    value={this.props.cell.value}
                    type='text'/>
        );
    }
}

export default EditableField