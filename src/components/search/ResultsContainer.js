import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product';

function ResultsContainer(props) {
    return (
        <div style={containerStyle}>
        <p style={metaStyle}>Showing 10 results from 3 vendors</p>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

const metaStyle = {
    fontSize:"0.8em",
    color:"#333",
    padding:"10px"
}

const containerStyle = {
    width:"100%",
    margin:"30px auto 50px auto",
    textAlign:"center"
}

ResultsContainer.propTypes = {

}

export default ResultsContainer

