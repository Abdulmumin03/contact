import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchValue:'',
            searchResult:''
        }
    }

    handleChange = (event) => {
        this.setState({searchValue: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        let res = this.props.contactList.filter(contact => contact.phone === this.state.searchValue);
        this.setState({
            searchResult:res
        })
        
      }

    render(){
        return(
            <div>
                <div>
        <label>
    Search Number:
    <input type="text" name="phone" onChange={this.handleChange} />
  </label>
  <button type="submit"  onClick={this.handleSubmit} >
      Search
  </button>
        </div>

        <p>{this.state.searchResult ? `Search Result: ${this.state.searchResult}` : ''}</p>
            </div>
        );
    }
}

export default Search;
