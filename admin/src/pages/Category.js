import React, { Component } from 'react'
import ItemCategory from '../components/parts/ItemCategory'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CProductByCategory from '../components/parts/ProductByCategory'

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // let id = this.props.match.params.id;
        let id="1"
        return (
            <div>
                <CHeader />
                <div className="container">
                    <h3 style={{"textAlign": "center"}}>{id}</h3>
                    <CProductByCategory nameCategory={id} />
                </div>
                <CFooter />
            </div>
        )
    }
}

export default Category