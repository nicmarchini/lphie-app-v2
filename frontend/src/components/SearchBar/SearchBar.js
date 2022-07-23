import React from 'react';

class SearchBar extends React.Component {

    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }

    onClearEvent() {
        this.props.onClearEvent(this.props.onClearEvent);
    }

    render() {
        return (
            <div className='flex pt-2 pb-4 mb-4 place-content-end'>
                <input  className='flex p-2 place-content-start'
                        onChange={this.handleChange.bind(this)}
                        placeholder="search table..." 
                        value={this.props.filterText}
                        ref="filterTextInput"
                        type="text"/>
                <input  className="px-4 ml-2 font-bold
                                rounded-md bg-black text-white text-md
                                border hover:text-white
                                hover:bg-blue-700 hover:border-transparent
                                focus:outline-none"
                        onClick={this.onClearEvent.bind(this)}
                        value="clear"
                        type="button"/>    
            </div>
        );
    }
}

export default SearchBar