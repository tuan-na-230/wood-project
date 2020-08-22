import React, { Component } from 'react'
import ItemCategory from '../components/parts/ItemCategory'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CItemProduct from '../components/parts/ItemProduct'
import config from '../config'

class Test extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let id = this.props.match.params.id;
        return (
            <div>
                <div className="container">
                    <CItemProduct />
                </div>
            </div>
        )
    }
}

export default Test