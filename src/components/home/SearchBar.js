import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SearchBar extends Component {
    state = {}

    onSubmit=(e)=>{
    }

    render() {
        return (
            <React.Fragment>
                <form  style={formStyle}>
                    <input style={inputStyle} type="text" placeholder="Search for a product"/>
                    <Link to="/search"><i style={searchStyle} className="fas fa-search"></i></Link>
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
    fontSize:"1.2em",
    width:"80%"
}

const searchStyle = {
    border:"solid 1px",
    display:"inline-block",
    padding:"15.5px",
    width:"20%",
    maxWidth:"60px",
    textAlign:"center",
    color:"#fff",
    background:"#ED254E"
}

export default SearchBar;
