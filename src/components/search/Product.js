import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    let product = props.product
    return (
        <a href="">
            <div style={productStyle}>
                <img alt="" style={imageStyle} src={product.thumb}/>
                <hr/>
                <p style={nameStyle}>{product.name}</p>
                <h4 style={priceStyle}>KES {product.price}</h4>
                <img  alt="" style={vendorBanner} src="/images/jumia.png"/>
            </div>
        </a>
    )
}

const productStyle = {
    display:"inline-block",
    border:"solid 1px",
    width:"90%",
    maxWidth:"150px",
    margin:"5px",
    padding:"10px 20px",
    textAlign:"left"
}

const imageStyle = {
    width:"90%",
    height:"100px",
    margin:"10px auto",
    display:"block",
}

const nameStyle = {
    fontSize:"0.8em",
    padding:"10px 0"
}

const priceStyle = {
    fontSize:"0.9em",
    color:"#333"
}

const vendorBanner = {
    position:"relative",
    right:"10px",
    width:"80px",
    height:"50px"
}

Product.propTypes = {

}

export default Product

