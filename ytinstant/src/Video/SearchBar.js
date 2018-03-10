import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
	handleChange(){
		this.props.onChange(this.refs.term.value);
	}
    render() {
	    return (
		    <div className="searchbar">
		    	<input ref="term" className="form-control" 
		    		onChange={this.handleChange.bind(this)}/>
		    </div>
	    );
  	}
}

export default SearchBar;
