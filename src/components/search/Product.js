import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    return (
        <a href="">
            <div style={productStyle}>
                <img alt="" style={imageStyle} src="https://i.roamcdn.net/hz/pi/listing-thumb-543w/a3120aebf877204e7e4b71a737ee21d9/-/hzfiles/pi/picture/qd7x6v4/487dc6d83ddc348ef0123c17591b879c26069ee0.png"/>
                <hr/>
                <p style={nameStyle}>Product Name</p>
                <h4 style={priceStyle}>KES 17,499</h4>
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
    fontSize:"1em",
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

