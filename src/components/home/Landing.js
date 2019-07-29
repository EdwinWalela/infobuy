import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar';
import Vendors from './Vendors';

function Landing(props) {
    return (
        <div>
            <h1 style={titleStyle}>InfoBuy.<span style={{color:"#E84855"}}>ke</span></h1>
            <p style={sloganStyle}>Compare prices from popular vendors across Africa and the World.</p>
            <SearchBar />
            <Vendors />
        </div>
    )
}

const titleStyle = {
    textAlign:"center",
    letterSpacing:"2px",
    fontSize:"3em",
    padding:"10px",
    margin:"50px auto 0px auto",
    color:"#2364AA"
}

const sloganStyle = {
    textAlign:"center",
    margin:"10px auto 50px auto"
}

Landing.propTypes = {

}

export default Landing

