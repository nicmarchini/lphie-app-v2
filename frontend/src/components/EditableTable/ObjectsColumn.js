import React from 'react';
import EditableColumn from './EditableColumn';

class ObjectsColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.object = {};
        
        this.content = props.state_obj;
        this.schema = props.schema_map;
        this.innerObj = {};

        // replace object keys with true names from mapping
        for (let [key, value] of Object.entries(this.content.obj)){
            if (this.schema[key]){
                this.innerObj[this.schema[key]] = value;
            } else {
                this.innerObj[key] = value;
            }
        }

        this.state.object = {
            id: this.content.id, 
            obj:this.innerObj
        }
    }

    handleTable(evt) {
        if (this.props.editable){
            var item = {
                id: evt.target.id,
                name: evt.target.name,
                value: evt.target.value
            };

            var object = this.state.object;
            var newObject = this.state.object;

            for (var key in object.obj) {
                if (key == item.name && object.id == item.id) {
                    newObject.obj[key] = item.value;
                }
            }

            this.setState({object:newObject});
        }
    };

    render() {
        return (
            <div>
            <div>
            <button className="h-10 px-6 mr-2 font-bold
                                rounded-md bg-black text-white text-md
                                border hover:text-white hover:bg-blue-700
                                hover:border-transparent focus:outline-none
                                disabled:opacity-25"
                    disabled={this.props.editable}
                    onClick={this.props.handleEdit}
                    type="button"
                    key='edit'>edit</button>
            <button className="h-10 px-6 font-bold
                                rounded-md bg-black text-white text-md
                                border hover:text-white hover:bg-blue-700
                                hover:border-transparent focus:outline-none
                                disabled:opacity-25
                                "
                    disabled={!this.props.editable}
                    onClick={this.props.handleEdit}
                    type="button"
                    key='save'>save</button>
            </div>
            <EditableColumn onTableUpdate={this.handleTable.bind(this)}
                            object={this.state.object}
                            />
            </div>
        );
    }
}

export default ObjectsColumn;
