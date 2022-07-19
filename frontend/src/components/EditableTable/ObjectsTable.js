import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import EditableTable from './EditableTable';

class ObjectsTable extends React.Component {
    constructor(props) {
      super(props);

      this.search_field = props.searchField
      this.state = {};
      this.state.filterText = "";
      this.state.schema = props.schema
      this.state.objects = props.state_obj;
    }

    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };

    handleRowDel(object) {
      var index = this.state.objects.indexOf(object);
      this.state.objects.splice(index, 1);
      this.setState(this.state.objects);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var object = {
        id: id,
        obj: {
            field1: "",
            field2: "",
            field3: "",
            field4: 0
        }
      }
      this.state.objects.push(object);
      this.setState(this.state.objects);
  
    };
  
    handleTable(evt) {
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
    };

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
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
