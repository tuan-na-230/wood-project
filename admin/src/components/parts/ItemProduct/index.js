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

    showRow = () => {
        let { item1, item2, item3 } = this.props;
        item1 = item1 || {};
        item2 = item2 || {};
        item3 = item3 || {};
        let list = [item1, item2, item3]
        console.log(list)
        return (
            list.map((item, index) => {
                if (item.name) {
                    return (
                        <div className="col-sm-4 product" key={index} style={{ 'height': '450px' }}>
                            <div className="item-product" style={{ 'paddingTop': '0px' }} >
                                <div className="image">
                                    <img className="item-product-img" src={item.image} />
                                </div>
                                <div className='detail'>
                                    <p className="item-product-name">{item.name}</p>
                                    <p className="item-product-price">{this.numberWithCommas(item.price)}đ</p>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return ('')
                }
            })
        )
    }
    render() {

        return (
            <div>
                <div className="row">
                    {this.showRow()}
                </div>
            </div>
        )
    }
}
export default ItemProduct