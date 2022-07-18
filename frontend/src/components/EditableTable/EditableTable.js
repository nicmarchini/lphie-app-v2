import React from 'react';
import EditableRow from './EditableRow';

class EditableTable extends React.Component {
  
    render() {
        var schema = this.props.schema;
        var field = this.props.searchField;
        let column_titles = [];

        for(let name in schema){
            column_titles.push(<th>{schema[name]}</th>)
        } 
        
        var onTableUpdate = this.props.onTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var object = this.props.objects.map(function(object) {
            if (object.obj[field].indexOf(filterText) === -1) {
                return;
            }
            return (<EditableRow onTableUpdate={onTableUpdate}
                                object={object}
                                onDelEvent={rowDel.bind(this)}
                                key={object.id}/>)
        });

        return (
            <div>
            <button type="button" onClick={this.props.onRowAdd}>Add</button>
            <table>
                <thead>
                    <tr>
                        {column_titles}
                    </tr>
                </thead>
                <tbody>
                    {object}
                </tbody>
            </table>
            </div>
        );
    }
}
 
export default EditableTable