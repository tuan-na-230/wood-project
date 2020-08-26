import React, { Component } from 'react'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CInfoContact from '../components/parts/InfoContact'
import CFormContact from '../components/parts/FormContact'
import CMapContact from '../components/parts/MapContact'
class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <CHeader />
                <div className="carousel-item active" style={{ "width": '100%', 'height': '50vh' }} id='abc'>
                        <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/category/sizechart/zuma-1522229923.jpg" className="d-block " style={{ 'height': 'inherit' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block" id='text'>
                            <h1>Liên Hệ</h1>
                        </div>
                    </div>
                <div className="container" id='contact'>
                    <div className="row">
                        <div className="col-sm-6">
                            <CInfoContact />
                            <CMapContact />
                        </div>
                        <div className="col-sm-6">
                            <CFormContact />
                        </div>
                    </div>
                </div>
                <CFooter />
            </div>
        )
    }
}
export default Contact