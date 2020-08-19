import React, { Component } from 'react'
import config from '../../../config'
import './main.scss'

class productPortfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Danh mục sản phẩm</h3>
                <div className="row each-product-portfolio">
                    <div className="col-sm-6">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-6">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                    <div className="col-sm-4">
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default productPortfolio