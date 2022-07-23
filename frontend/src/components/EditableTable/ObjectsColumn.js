import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import EditableColumn from './EditableColumn';

class ObjectsColumn extends React.Component {
    constructor(props) {
      super(props);

    //   this.search_field = props.searchField
      this.state = {};
    //   this.state.filterText = "";
      this.state.schema = []
      this.state.object = props.state_obj;

      for (let key in this.state.object.obj){
        this.state.schema.push(key)
      }

    }

    // handleUserInput(filterText) {
    //   this.setState({filterText: filterText});
    // };

    // handleRowDel(object) {
    //   var index = this.state.objects.indexOf(object);
    //   this.state.objects.splice(index, 1);
    //   this.setState(this.state.objects);
    // };
  


    // handleAddEvent(evt) {
    //   var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    //   var object = {
    //     id: id,
    //     obj: {}
    //   }

    //   for (let field in this.state.schema){
    //     object.obj[this.state.schema[field]] = ""
    //   }

    //   this.state.objects.push(object);
    //   this.setState(this.state.objects);
    // };
    
    // handleClear(){
    //   this.setState({filterText: ""})
    // }

    // handleChangeEditMode() {
    //   if (this.state.editMode){
    //     this.state.editMode = false
    //   } else {
    //     this.state.editMode = true
    //   }
    // };

    // setEdit(bool) {
    //   this.setState({editMode:bool});
    // };

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
        // console.log(object)
        this.setState({object:newObject});
      }
    };

    render() {
        return (
          <div >
            <div className="" >
               <button
                  disabled={this.props.editable}
                  key='edit'
                  type="button"
                  className="h-10 px-6 mr-2 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                            onClick={
                              this.props.handleEdit
                            }
                            >
                            edit
                </button>
                <button
                  disabled={!this.props.editable}
                  type="button"
                  key='save'
                  className="h-10 px-6 font-bold
                            rounded-md bg-black text-white text-md
                            border hover:text-white hover:bg-blue-700
                            hover:border-transparent focus:outline-none
                            disabled:opacity-25
                            "
                            onClick={
                             this.props.handleEdit
                            }>
                            save
                </button>
            </div>
                
                {/* <SearchBar  onClearEvent={this.handleClear.bind(this)}
                            filterText={this.state.filterText}
                            onUserInput={this.handleUserInput.bind(this)}/> */}
                <EditableColumn 
                                onTableUpdate={this.handleTable.bind(this)}
                                // onRowAdd={this.handleAddEvent.bind(this)}
                                // onRowDel={this.handleRowDel.bind(this)}
                                object={this.state.object}
                                //filterText={this.state.filterText}
                                schema={this.state.schema}
                                //searchField={this.search_field}
                                />
            </div>
        );
    }
  }

  export default ObjectsColumn;
