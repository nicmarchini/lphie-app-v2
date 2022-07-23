import React from 'react';
import EditableRow from './EditableRow';

class EditableTable extends React.Component {
  
    render() {
        let column_titles = [];
        var empty_count = 0;
        var total_count = 0;

        var schema = this.props.schema;
        var field = this.props.searchField;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var onTableUpdate = this.props.onTableUpdate;

        for(let name in schema){
            column_titles.push(
                <th className='text-lg'>
                    {schema[name]}
                </th>
            )
        }

        var object = this.props.objects.map(function(object) {
            if (object.obj[field].indexOf(filterText) === -1) {
                empty_count +=1;
                total_count +=1;
                return;
            }

            total_count +=1;
            
            return (
                <EditableRow
                    onTableUpdate={onTableUpdate}
                    onDelEvent={rowDel.bind(this)}
                    object={object}
                    key={object.id}/>
            )
        });

        if (empty_count == total_count){
            let empty_object = { id:0 , obj:{} }

            for (let field in schema){
                empty_object.obj[schema[field]] = "" 
            }

            object = <EditableRow
                        onTableUpdate={onTableUpdate}
                        object={empty_object}
                        key={empty_object.id}/>
        }

        return (
            <div>
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
            <div className='flex place-content-start'>
                <div>
                <button className="px-2 mt-1 font-bold
                                    rounded-md bg-black text-white text-2xl
                                    border hover:text-white
                                    hover:bg-blue-700 hover:border-transparent
                                    focus:outline-none"
                        onClick={this.props.onRowAdd}
                        type="button">+</button>
                </div>
            </div>
            </div>
        );
    }
}
 
export default EditableTable