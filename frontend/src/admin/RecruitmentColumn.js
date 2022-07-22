import React from "react";
import mock_recruit from './mocks/MockRecruit';
import ObjectsColumn from "../components/EditableTable/ObjectsColumn";

class RecruitmentColumn extends React.Component {
    constructor(props) {
        super(props);

        // this.search_field = 'letter'
        this.recruit_obj = mock_recruit
    }

    render() {
        return (
            <div>
                <ObjectsColumn   state_obj={this.recruit_obj[0]}
                                // searchField={this.search_field}
                                />
            </div>
        );
    }
}

export default RecruitmentColumn;