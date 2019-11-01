import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
            <form >
                <label>Player Search:
                <input 
                    type='text' 
                    name='search' 
                    placeholder='Search By Name' 
                    value={this.props.search} 
                    onChange={this.props.changeHandler} 
                    />
                </label>
            </form>
            
        )
    }
}

export default SearchForm;