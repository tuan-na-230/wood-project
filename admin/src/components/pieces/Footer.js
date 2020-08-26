import React, { Component } from 'react'
import CustomerSendMail from './customerSendMail'
import config from '../../config'
import { Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h3>Bảng tin điện tử</h3>
                            </div>
                            <div className="col-md-4">
                                <p>Đăng ký để cập nhật thông tin mới nhất về khuyến mãi, sản phẩm và sự kiện.</p>
                            </div>
                            <div className="col-md-5">
                                <CustomerSendMail />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img style={{ "width": "100px" }} src={config.domain + '/src/assets/images/logo.png'} alt="" />
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                                    <li>Chương trình khuyến mại</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <h4>HƯỚNG DẪN MUA HÀNG</h4>
                                    <li>Chính sách mua hàng</li>
                                    <li>Chính sách đổi trả hàng</li>
                                    <li>Chính sách bảo hành</li>
                                    <li>Quy định hình thức thanh toán</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={config.domain + '/src/assets/images/logoFacebook.png'} alt="facebook icon" className="contact_icon" />
                                <img src={config.domain + '/src/assets/images/logoYoutube.png'} alt="youtube icon" className="contact_icon" />
                            </div>
                            <div className="col-md-8">
                                <ul>
                                    <p><i className="far fa-copyright" /> ©2020 Shop Đồ Gỗ</p>
                                    <p>Địa chỉ : 211 Bạch Mai, Ô Cầu Dền, Thanh Nhàn, Hai Bà Trưng, Hà Nội</p>
                                    <p>Hotline : 0123939293</p>
                                    <p>Email : abc@gmail.com</p>
                                    <li><Link to="/admin">Admin</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer