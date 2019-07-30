import React, { Component } from 'react'

class Form extends Component {
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
                    <input onChange={this.handleQueryChange} style={inputStyle} type="text" placeholder="Search for a product"/>
                    <i onClick={this.handleSearchSubmit} style={searchStyle} className="fas fa-search"></i>
                </form>
            </React.Fragment>
        )
    }
}

const formStyle = {
    display:"block",
    margin:"auto",
    width:"90%",
    maxWidth:"500px",
    paddingLeft:"20px"
}

const inputStyle = {
    padding:"5px",
    fontSize:"1em",
    width:"80%"
}

const searchStyle = {
    border:"solid 1px",
    display:"inline-block",
    padding:"9px",
    width:"20%",
    margin:"auto",
    maxWidth:"50px",
    textAlign:"center",
    color:"#fff",
    background:"#ED254E"
}

export default Form;