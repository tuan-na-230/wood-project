import React, { Component } from 'react'
import CItemProduct from '../parts/ItemProduct'

class ShowRowProduct extends Component {
    constructor(props) {
        super(props)
    }

    showRow = () => {
        let { item1, item2, item3 }= this.props;
        item1 = item1 || {};
        item2 = item2 || {};
        item3 = item3 || {}; 
        let list = [item1, item2, item3]
    
        return (
            list.map(item => {
                <div className="col-sm-4">
                    < CItemProduct img={item.image} name={item.name} price={item.price} key={item._id}/>
                </div>
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