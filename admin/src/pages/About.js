import React, { Component } from 'react'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CIntrodure from '../components/parts/Introdure'
class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CHeader />
                <div className="container">
                    <CIntrodure />
                </div>
                <CFooter />
            </div>
        )
    }
}
export default About