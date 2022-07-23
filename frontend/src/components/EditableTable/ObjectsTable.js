import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import EditableTable from './EditableTable';

class ObjectsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.schema = []
        this.state.editMode = false
        this.state.filterText = "";
        this.state.objects = props.state_obj;

        this.search_field = props.searchField
       
        for (let key in this.state.objects[0].obj){
            this.state.schema.push(key)
        }
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };

    handleRowDel(object) {
        var index = this.state.objects.indexOf(object);
        this.state.objects.splice(index, 1);
        this.setState(this.state.objects);
    };
  
    handleEdit(){
        let mode = !this.state.editMode;
        this.setState({editMode:mode})
    }

    handleAddEvent(evt) {
        // replace with uuid, or make a function, something cleaner here
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var object = {
            id: id,
            obj: {}
        }

        for (let field in this.state.schema){
            object.obj[this.state.schema[field]] = ""
        }

        this.state.objects.push(object);
        this.setState(this.state.objects);
    };
    
    handleClear(){
        this.setState({filterText: ""})
    }

    handleTable(evt) {
        if (this.state.editMode){
            var item = {
                id: evt.target.id,
                name: evt.target.name,
                value: evt.target.value
            };

            var objects = this.state.objects.slice();
            var newObjects = objects.map(function(object) {
    
                for (var key in object.obj) {
                    if (key == item.name && object.id == item.id) {
                        object.obj[key] = item.value;
                    }
                }

                return object;
            });

            this.setState({objects:newObjects});
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
                            disabled:opacity-25
                            "
                    onClick={this.handleEdit.bind(this)}
                    disabled={this.state.editMode}
                    type="button"
                    key='edit'>edit</button>
            <button className="h-10 px-6 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                    onClick={this.handleEdit.bind(this)}
                    disabled={!this.state.editMode}
                    type="button"
                    key='save'>save</button>
            </div>
            <SearchBar  onClearEvent={this.handleClear.bind(this)}
                        filterText={this.state.filterText}
                        onUserInput={this.handleUserInput.bind(this)}/>
            <EditableTable  onTableUpdate={this.handleTable.bind(this)}
                            onRowAdd={this.handleAddEvent.bind(this)}
                            onRowDel={this.handleRowDel.bind(this)}
                            objects={this.state.objects}
                            filterText={this.state.filterText}
                            schema={this.state.schema}
                            searchField={this.search_field}/>
            </div>
        );
    }
}

export default ObjectsTable;
