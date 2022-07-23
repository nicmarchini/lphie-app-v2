import React from "react";
import mock_recruit from './mocks/MockRecruit';
import ObjectsColumn from "../components/EditableTable/ObjectsColumn";
import UploadButton from "../components/Actions/UploadButton";
import BinaryButton from "../components/Actions/BinaryButton";

class RecruitmentColumn extends React.Component {
    constructor(props) {
        super(props);

        // this.search_field = 'letter'
        this.recruit_obj = mock_recruit
        this.state = {}
        this.state.editable = false
    }
    
    handleEdit(){
        let mode = !this.state.editable;
        this.setState({editable:mode})
      }

    render() {
        return (
            <div>
                <ObjectsColumn   state_obj={this.recruit_obj[0]}
                                 editable={this.state.editable==true}
                                 handleEdit={this.handleEdit.bind(this)}
                                // searchField={this.search_field}
                  
                />
                <UploadButton editable={this.state.editable==true}/>
                <BinaryButton editable={this.state.editable==true}/>
            </div>
        );
    }
}

export default RecruitmentColumn;