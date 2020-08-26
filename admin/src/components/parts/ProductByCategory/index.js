import React, { Component } from 'react'
import CShowRowProduct from '../../pieces/showRowProduct'
import CItemProduct from '../ItemProduct'
import CTableControls from '../../pieces/TableControls'
import config from '../../../config'
import axios from 'axios'

class ProductByCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 1,
            pageSize: 9,
            count: 0,
            nameCategory: this.props.nameCategory,
            listProduct: [],
        }

        this.getProductByCategory = this.getProductByCategory.bind(this)
        this.showListProduct = this.showListProduct.bind(this)
        this.apiCount = this.apiCount.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    componentDidMount() {
        this.getProductByCategory()
        this.apiCount()
    }

    setPageConfig(config = { pageIndex, pageSize, nameCategory }) {
        this.setState(config)
    }

    apiCount = () => {
        let categoryId = this.state.nameCategory;
        let url = config.domain + "/products"
        axios({
            method: 'get',
            url: url,
            params: {
                category: categoryId,
                count: true
            }
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    count: res.data
                })
            })
            .catch(error => { console.log(error) })
    }

    getProductByCategory = () => {
        let url = config.domain + "/products"
        let { pageIndex, pageSize, nameCategory } = this.state
        let param = {
            pageIndex,
            pageSize,
            category: nameCategory || ''
        }
        axios({
            method: 'get',
            url: url,
            params: param
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
        for (let i = 0; i < Math.ceil(listProduct.length / 3); i++) {
            show.push(<CItemProduct item1={listProduct[i * 3]} item2={listProduct[i * 3 + 1]} item3={listProduct[i * 3 + 2]} key={i} />)
        }
        return (show)
    }

    render() {
        let { count, pageIndex, pageSize } = this.state
        return (
            <div>
                {this.showListProduct()}
                {/* <CTableControls
                    count={count}
                    pageSize={pageSize}
                    setPageConfig={this.setPageConfig}
                    pageIndex={pageIndex}
                    callApiList={this.apiCount} /> */}
            </div>
        )
    }
}

export default ProductByCategory