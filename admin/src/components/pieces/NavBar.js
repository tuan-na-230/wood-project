import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import CSearch from './Search'
import history from '../../history'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light ">
                        <Link className="nav-link navbar-brand col-md-1" to="/">
                            <img className="opacity-1" src={config.domain + '/src/assets/images/logo.png'} alt="" id="ImgLogo" style={{ height: '50px', width: '50px' }} />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active col-md-4">
                                    <Link className="nav-link" to="/">Trang chủ</Link>
                                </li>
                                <li className="nav-item active col-md-4">
                                    <Link className="nav-link" to="/about">Về chúng tôi</Link>
                                </li>
                                <li className="nav-item active col-md-4">
                                    <Link className="nav-link" to="/contact">Liên hệ</Link>
                                </li>
                                <li className="nav-item dropdown active col-md-4">
                                    <Link to="/product" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sản Phẩm</Link>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/category/noi-that-phong-khach">
                                            <span >Nội thất phòng khách</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-phong-ngu">
                                            <span >Nội thất phòng ngủ</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-phong-bep">
                                            <span >Nội thất phòng bếp</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-ngoai-troi">
                                            <span >Nội thất ngoài trời</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-tre-em">
                                            <span >Nội thất trẻ em</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/Sofa">
                                            <span >sofa</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-van-phong">
                                            <span >Nội thất văn phòng</span>
                                        </Link>
                                        <Link className="dropdown-item" to="/category/noi-that-phong-cho">
                                            <span >Nội thất phòng chờ</span>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            {/* <CSearch history={history} /> */}
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default NavBar