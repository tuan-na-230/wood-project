import React, { Component } from 'react'
import CItemProduct from '../ItemProduct'

class ProducBySearch  extends Component {
    constructor(props) {
        super(props)
    }

    showListProduct = () => {
        let listProduct = this.props.listProduct;
        let show = []
        for (let i = 0; i < Math.ceil(listProduct.length / 3); i++) {
            show.push(<CItemProduct item1={listProduct[i * 3]} item2={listProduct[i * 3 + 1]} item3={listProduct[i * 3 + 2]} key={i} />)
        }
        return (show)
    }

    render() {
        return (
            <div> 
                {this.showListProduct()}
            </div>
        )
    }
}

export default ProducBySearch