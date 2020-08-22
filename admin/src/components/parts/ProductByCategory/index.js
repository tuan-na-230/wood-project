import React, { Component } from 'react'
import CItemProduct from '../ItemProduct'
import config from '../../../config'
import axios from 'axios'

class ProductByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameCategory: this.props.nameCategory,
            listProduct: {}
        }

        this.getProductByCategory = this.getProductByCategory.bind(this)
        this.showListProduct = this.showListProduct.bind(this)
    }

    componentWillMount() {
        this.getProductByCategory()
    }

    getProductByCategory = () => {
        let categoryId = this.state.nameCategory;
        let url = config.domain + "/products?categoryId=" + categoryId + "&pageSize=null"
        console.log(url)
        console.log(categoryId)
        axios({
            method: 'get',
            url: url,
        })
            .then(res => {
                this.state.listProduct = res
                console.log(this.state.listProduct)
            })
            .catch(error => { console.log(error) })
    }

    showListProduct = () => {
        let listProduct = this.state.listProduct;
        let show = ''
        for (let i = 0; i < Math.ceil(listProduct.length / 3); i++) {
            show += '<div className="row">'
            for (let j = i * 3; j < (i + 1) * 3; j++) {
                let element = listProduct[i];

                show += `<div className="col-sm-4">
                            ${< CItemProduct img={element.image} name={element.name} price={element.price} key={j.toString()} />}
                        </div > `
            }
            show += `</div>`
        }
        return show;
    }

    render() {
        return (
            <div>
                <p>a</p>
                {this.showListProduct()}
            </div>
        )
    }
}

export default ProductByCategory