import React from 'react';
import EditableField from './EditableField';

class EditableColumn extends React.Component {

    onDelEvent() {
        this.props.onDelEvent(this.props.object);
    }

    render() {
        let cells = [];
        // console.log(this.props.object)

        let row_id = this.props.object.id
        // console.log(row_id)


        for (let [key, value] of Object.entries(this.props.object.obj)) {
            cells.push(
                <div className="flex place-content-end my-2">
                    <div className="mr-2">
                        {key}
                    </div>
                    <EditableField style={{width:400}}
                        onTableUpdate={this.props.onTableUpdate}
                        cell={{
                            "type": key,
                            value: value,
                            id: row_id
                        }}
                    />
                </div>
            )
        }

        return (
            // <tr>
            <div className="flex flex-col">
                { cells }
                <div>
                {/* // <td> */}
                    {/* <input className="ml-1 px-2 font-bold
                                            rounded-md bg-black text-white text-md
                                            border hover:text-white
                                            hover:bg-blue-700 hover:border-transparent
                                            focus:outline-none"
                        type="button"
                        onClick={this.onDelEvent.bind(this)}
                        value="X"
                        /> */}
                </div>
                    
                {/* </td> */}
            {/* // </tr> */}
            </div>

        );
    }
}

export default EditableColumn;