import React, { Component } from 'react'
import CNavBar from '../../pieces/NavBar'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CNavBar />
                <p>123</p>
            </div>
        )
    }
}

export default Header