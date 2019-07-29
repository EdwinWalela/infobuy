import React from 'react'

function Footer() {
    return (
        <div style={footerStyle}>
           <p style={titleStyle}>Developers: <a href="#">API Documentation</a></p>
        </div>
    )
}

const footerStyle = {
    position:'relative',
    width:'100%',
    bottom:'0',
    marginTop: '100px',
    background:'#333',
    padding:'20px',
    color:'#fff'
}

const titleStyle = {
    fontSize:"0.9em"
}

export default Footer;