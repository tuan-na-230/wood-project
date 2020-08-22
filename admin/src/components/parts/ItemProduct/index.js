import React, { Component } from 'react'
import './main.scss'

class ItemProduct extends Component {
    constructor(props) {
        super(props)
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        let { img, name, price } = this.props;
        return (
            <div>
                <div className="item-product">
                    <img className="item-product-img" src={img} />
                    <p className="item-product-name">{name}</p>
                    <p className="item-product-price">{this.numberWithCommas(price)}đ</p>
                </div>
            </div>
        )
    }
}

export default ItemProduct