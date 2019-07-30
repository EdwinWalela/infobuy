import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from './Header';
import ResultContainer from './ResultsContainer';

function SearchPage(props) {
    return (
        <React.Fragment>
            <SearchHeader />
            <ResultContainer />
        </React.Fragment>
    )
}

SearchPage.propTypes = {

}

export default SearchPage

