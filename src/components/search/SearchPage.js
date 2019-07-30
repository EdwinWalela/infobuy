import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from './Header';
import ResultContainer from './ResultsContainer';

function SearchPage(props) {
    return (
        <div style={wrapperStyle}>
            <SearchHeader fetchResults={props.fetchResults}/>
            <ResultContainer products={props.products}/>
        </div>
    )
}

const wrapperStyle = {
    minHeight:"80vh"
}
SearchPage.propTypes = {
    products:PropTypes.array.isRequired
}

export default SearchPage

