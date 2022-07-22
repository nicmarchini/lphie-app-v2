import React from 'react';

class EditableField extends React.Component {
    render() {
        return (
                <input className='text-md pl-3 py-1'
                    style={this.props.style ? this.props.style : {}}
                    type='text'
                    name={this.props.cell.type}
                    id={this.props.cell.id}
                    value={this.props.cell.value}
                    onChange={this.props.onTableUpdate}/>
        );
    }
}

export default EditableField