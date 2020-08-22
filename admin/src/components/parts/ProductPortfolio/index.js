import React, { Component } from 'react'
import config from '../../../config'
import CItemCategory from '../ItemCategory'
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
                        <CItemCategory name="nội thất phòng khách" link="category/noi-that-phong-khach" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>
                    </div>
                    <div className="col-sm-6">
                        <CItemCategory name="nội thất phòng bếp" link="category/noi-that-phong-bep" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>
                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất phòng ngủ" link="category/noi-that-phong-ngu" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất phòng thờ" link="category/noi-that-phong-tho" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất trẻ em" link="category/noi-that-tre-em" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <CItemCategory name="sofa" link="category/sofa" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất văn phòng" link="category/noi-that-van-phong" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="tiện ích khác" link="category/tien-ich-khac" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                </div>

            </div>
        )
    }
}

export default productPortfolio