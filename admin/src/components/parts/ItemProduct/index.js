import React, { Component } from 'react'
import './main.scss'

class ItemProduct extends Component {
    constructor(props) {
        super(props)

        this.numberWithCommas = this.numberWithCommas.bind(this)
        this.showRow = this.showRow.bind(this)
    }

    numberWithCommas = (y) => {
        let x = y || ''
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    showItem = () => {
        console.log('vao2')
        let { image, name, price } = this.props
        console.log(image, name, price)
        return (
            <div className="item-product">
                <img className="item-product-img" src={image} />
                <p className="item-product-name">{name}</p>
                <p className="item-product-price">{this.numberWithCommas(price)}</p>
            </div>
        )
    }

    showRow = () => {
        let { item1, item2, item3 } = this.props;
        item1 = item1 || {};
        item2 = item2 || {};
        item3 = item3 || {};
        let list = [item1, item2, item3]
        console.log(list)
        return (
            list.map((item, index) => {
                return (
                    <div className="col-sm-4" key={index}>
                        <div className="item-product">
                            <div className="image-block">
                                <img className="item-product-img" src={item.image} />
                            </div>
                            <p className="item-product-name">{item.name}</p>
                            <p className="item-product-price">{this.numberWithCommas(item.price)}</p>
                        </div>
                    </div>)
            })
        )
    }

    render() {
        return (
            <div className="row">
                {this.showRow()}
            </div>
        )
    }
}

export default ItemProduct