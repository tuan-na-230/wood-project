import React, { Component } from 'react'
import '../../scss/main.scss'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div ClassName ="header"> 
                <p>ạlfasdjflskdx`</p>
                <div className="header">
                    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light " style="position: fixed;background-color: rgba(255,255,255,0.4) !important ; width: 100%;z-index: 999; top: 0">
                        <a className="navbar-brand col-md-1" href="#"><img className="opacity-1" src="./image/tải xuống.png" alt="" id='ImgLogo' style="height: 50px;width: 50px;"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                            <li className="nav-item active col-md-3">
                                <a className="nav-link" href="#">Trang Chủ <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active col-md-3">
                                <a className="nav-link" href="#">Về chúng tôi</a>
                            </li>
                            <li className="nav-item dropdown active col-md-3">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sản Phẩm
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item active col-md-2">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Liên hệ</a>
                            </li>
                            <li className="nav-item active col-md-2">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><i className="fas fa-phone-square-alt">Hotline:0328883094 </i></a>
                            </li>


                            </ul>
                            <form className="form-inline my-2 my-lg-0  ">
                            <input className="form-control mr-sm-2 active " type="search" placeholder="Search" aria-label="Search">
                            <button className="btn btn-outline-success my-2 my-sm-0 active" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar