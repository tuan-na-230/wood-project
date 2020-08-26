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
            <div style={{"marginTop": "20px", "color": "#8b0028", "fontWeight": "500"}}>
                <h3 style={{"textAlign": "center"}}>Danh mục sản phẩm</h3>
                <div className="row each-product-portfolio">
                    <div className="col-sm-6">
                        <CItemCategory name="nội thất phòng khách" link="category/noi-that-phong-khach" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/noi-that-1-1590202169.jpg"></CItemCategory>
                    </div>
                    <div className="col-sm-6">
                        <CItemCategory name="nội thất phòng bếp" link="category/noi-that-phong-bep" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/tu-bep-1-1590456061.jpg"></CItemCategory>
                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất phòng ngủ" link="category/noi-that-phong-ngu" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất phòng thờ" link="category/noi-that-ngoai-troi" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/tu-lanh-3-1590456103.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất trẻ em" link="category/noi-that-tre-em" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/dong-ho-1-1590202988.jpg"></CItemCategory>                    </div>
                </div>
                <div className="row each-product-portfolio">
                    <div className="col-sm-4">
                        <CItemCategory name="sofa" link="category/sofa" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/dem-ga-goi-2-1590406255.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="nội thất văn phòng" link="category/noi-that-van-phong" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/cong-tac-01-1590405975.jpg"></CItemCategory>                    </div>
                    <div className="col-sm-4">
                        <CItemCategory name="tiện ích khác" link="category/noi-that-phong-cho" img="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/tham-trang-tri-2-1590456870.jpg"></CItemCategory>                    </div>
                </div>

            </div>
        )
    }
}

export default productPortfolio