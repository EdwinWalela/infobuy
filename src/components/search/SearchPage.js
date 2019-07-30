import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from './Header';
import ResultContainer from './ResultsContainer';

function SearchPage(props) {
    return (
        <React.Fragment>
            <SearchHeader fetchResults={props.fetchResults}/>
            <ResultContainer products={props.products}/>
        </React.Fragment>
    )
}

SearchPage.propTypes = {
    products:PropTypes.array.isRequired
}

export default SearchPage

