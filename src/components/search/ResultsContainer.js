import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Product from './Product';

class ResultsContainer extends Component {
    
    state = {
        jumia:[],
        kilimall:[],
        pigiame:[]
    }

    componentWillReceiveProps(next){
        console.log(next)
        this.setState({
            jumia:next.products.jumia,
            kilimall:next.products.kilimall,
            pigiame:next.products.pigiame,
        })
    }

    render(){
        return (
            <div style={containerStyle}>
            <p style={metaStyle}>Showing 10 results from 3 vendors</p>
                {
                    this.state.jumia.map(product=>(
                        <Product product={product}/>
                    ))
                }
                {
                    this.state.kilimall.map(product=>(
                        <Product product={product}/>
                    ))
                }
                {
                    this.state.pigiame.map(product=>(
                        <Product product={product}/>
                    ))
                }
            </div>
        )
    }
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
    products:PropTypes.array.isRequired
}

export default ResultsContainer

