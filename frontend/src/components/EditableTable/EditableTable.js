import React from 'react';
import EditableRow from './EditableRow';
// import './EditableTable.css';
// import '../../index.css'

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
            // <div className='flex place-content-center'>
            <div >
            <table>
                <thead>
                    <tr >
                        {column_titles}
                    </tr>
                </thead>
                <tbody>
                    {object}
                </tbody>
            </table>
            <div className='flex place-content-center'>
            <button type="button" className="px-4 py-1 text-sm text-purple-600 bg-purple-200 rounded-none border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none" onClick={this.props.onRowAdd}>ADD ROW</button>
            </div>
            </div>
            // </div>
        );
    }
}
 
export default EditableTable