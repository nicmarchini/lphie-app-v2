import React from 'react';

class SearchBar extends React.Component {
  
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <div>
        <input  type="text"
                placeholder="Search..." 
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }
}

export default SearchBar