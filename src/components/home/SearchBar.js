import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

class SearchBar extends Component {
    state = {
        query:""
    }

    handleQueryChange = (e) =>{
        this.setState({
            query:e.target.value
        })
    }

    handleSearchSubmit=(e)=>{
        this.props.fetchResults(this.state.query);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSearchSubmit} style={formStyle}>
                    <input value={this.state.query} onChange={this.handleQueryChange} style={inputStyle} type="text" placeholder="Search for a product"/>
                    <Link onClick={this.handleSearchSubmit} to={`/search?q=${this.state.query}`}>
                        <i style={searchStyle} className="fas fa-search"></i>
                    </Link>
                </form>
            </React.Fragment>
        )
    }
}

const formStyle = {
    margin:"auto",
    width:"90%",
    maxWidth:"500px",
    paddingLeft:"25px"
}

const inputStyle = {
    padding:"10px",
    fontSize:"1.1em",
    width:"80%",
    letterSpacing:"1px"
}

const searchStyle = {
    border:"solid 1px",
    display:"inline-block",
    padding:"15.5px",
    width:"100%",
    maxWidth:"60px",
    textAlign:"center",
    color:"#fff",
    background:"#ED254E"
}

const btnStyle = {
    border:"none",
    background:"transparent"
}

SearchBar.propTypes = {
    fetchResults:PropTypes.func.isRequired
} 

export default SearchBar;
