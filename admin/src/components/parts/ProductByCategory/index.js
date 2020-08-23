import React, { Component } from 'react'
import CShowRowProduct from '../../pieces/showRowProduct'
import CItemProduct from '../ItemProduct'
import config from '../../../config'
import axios from 'axios'

class ProductByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameCategory: this.props.nameCategory,
            listProduct: [],
        }

        this.getProductByCategory = this.getProductByCategory.bind(this)
        this.showListProduct = this.showListProduct.bind(this)
    }

    componentDidMount() {
        this.getProductByCategory()
    }

    getProductByCategory = () => {
        let categoryId = this.state.nameCategory;
        let url = config.domain + "/products?categoryId=" + categoryId + "&pageSize=null"
        axios({
            method: 'get',
            url: url,
        })
            .then(res => {
                this.setState({ listProduct: res.data })
            })
            .catch(error => { console.log(error) })
    }

    showListProduct = () => {
        let listProduct = this.state.listProduct;
        console.log(listProduct)
        let show = []
        show.push(<p>a</p>)
        for (let i = 0; i < Math.ceil(listProduct.length / 3); i++) {
            show.push(<CShowRowProduct item1={listProduct[i * 3]} item2={listProduct[i * 3 + 1]} item3={listProduct[i * 3 + 2]} key={i} />)
        }

        console.log(show)
        return show
    }

    // test = (list) => {
    //     list = list || []
    //     return list.map((item, index) => {
    //         return (
    //             {item}
    //         )
    //     })
    // }

    render() {
        return (
            <div>
                {this.showListProduct()}
            </div>
        )
    }
}

export default ProductByCategory