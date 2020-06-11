import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    constructor(props){
        super(props) ;
        this.state ={
            valueSearch :''
        }
    }
    isChange =(event) => {
        console.log(event.target.value) ;
        this.setState({valueSearch:event.target.value}) ;
        this.props.checkConnectSearch(event.target.value);
    }
    render() {
        return (
            <div className="container h-100" onClick={(data)=> this.props.checkConnectSearch(this.state.valueSearch)} >
                <div className="d-flex justify-content-center h-100">
                      <div className="searchbar"  >
                         <input className="search_input" type="text" name placeholder="Search..." onChange={(event) => {this.isChange(event)}} />
                         <a href="#" className="search_icon"  ><i className="fas fa-search" /></a>
                     </div>
                </div>
            </div>
        );
    }
}

export default Search;