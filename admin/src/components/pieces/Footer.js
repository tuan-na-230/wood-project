import React, { Component } from 'react'
import config from '../../config'

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
                                <form className="form-inline">
                                    <div className="form-group mx-sm-3 mb-2">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Gửi</button>
                                </form>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={config.domain + '/src/assets/images/logo.png'} alt="" />
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
                                    <p><i className="far fa-copyright" /> 2020 ABC</p>
                                    <p>Địa chỉ : nhà  thầy minh</p>
                                    <p>Hotline : 0123939293</p>
                                    <p>Email : abc@gmail.com</p>
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