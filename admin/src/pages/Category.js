import React, { Component } from 'react'
import ItemCategory from '../components/parts/ItemCategory'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CProductByCategory from '../components/parts/ProductByCategory'
import "../scss/main.scss"
class Category extends Component {
    constructor(props) {
        super(props)
    }

    setPage = () => {
        let id = this.props.match.params.id;
        return id
    }
    
    render() {
        let id = this.setPage()
        // let id = "noi-that-phong-cho"
        return (
            <div>
                <CHeader />
                <div className="carousel-item active" style={{ "width": '100%', 'height': '50vh' }} id='abc'>
                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/category/sizechart/zuma-1522229923.jpg" className="d-block " style={{ 'height': 'inherit' }} alt="..." />
                    <div className="carousel-caption d-none d-md-block" id='text'>
                        <h1>Sản Phẩm</h1>
                    </div>
                </div>
                <div className="container productCatergory" >
                    <h2>Danh Sách Sản Phẩm</h2>
                    <CProductByCategory nameCategory={id} className='productByCatergory' />
                </div>
                <CFooter />
            </div>
        )
    }
}
export default Category