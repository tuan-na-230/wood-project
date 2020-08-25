import React, { Component } from 'react'


class ShowRowProduct extends Component {
    constructor(props) {
        super(props)
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    showRow = () => {
        let { item1, item2, item3 } = this.props;
        item1 = item1 || {};
        item2 = item2 || {};
        item3 = item3 || {};
        let list = [item1, item2, item3]
        return (
            list.map((item, index) => {
                return (
                    <div className="col-sm-4" key={index}>
                        <div className="item-product">
                            <img className="item-product-img" src={item.image} />
                            <p className="item-product-name">{item.name}</p>
                            <p className="item-product-price">{item.price}đ</p>
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

export default ShowRowProduct