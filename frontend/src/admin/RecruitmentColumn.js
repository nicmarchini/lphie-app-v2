import React from "react";
import ObjectsColumn from "../components/EditableTable/ObjectsColumn";
import UploadButton from "../components/Actions/UploadButton";
import BinaryButton from "../components/Actions/BinaryButton";
import mock_recruit from './mocks/MockRecruit';

class RecruitmentColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.state.editable = false

        // temp loading static mock data, replace with api connection later
        this.recruit_obj = mock_recruit[0]
        // testing with a single value, determine how to finalize this
        this.schema_map = {
            letter:'googles'
        }
    }
    
    handleEdit(){
        let mode = !this.state.editable;
        this.setState({editable:mode})
    }

    render() {
        return (
            <div>
            <ObjectsColumn  state_obj={this.recruit_obj}
                            schema_map={this.schema_map}
                            editable={this.state.editable==true}
                            handleEdit={this.handleEdit.bind(this)}/>
            <UploadButton editable={this.state.editable==true}/>
            <BinaryButton editable={this.state.editable==true}/>
            </div>
        );
    }
}

export default RecruitmentColumn;