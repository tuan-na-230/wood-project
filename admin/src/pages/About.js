import React, { Component } from 'react'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CIntrodure from '../components/parts/Introdure'
import CItemCategory from '../components/parts/ItemCategory'
class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CHeader />
                <CIntrodure />
                <CItemCategory />
                <CFooter />
            </div>
        )
    }
}
export default About