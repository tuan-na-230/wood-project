import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light " style={{ position: 'sticky', backgroundColor: 'rgba(255,255,255,0.4) !important', width: '100%', zIndex: 999, top: 0 }}>
                        <a className="navbar-brand col-md-1" href="#"><img className="opacity-1" src={config.domain + '/src/assets/images/abc.jpg'} alt="" id="ImgLogo" style={{ height: '50px', width: '50px' }} /></a>
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
                                <li className="nav-item dropdown active col-md-3">
                                    <Link to="/product" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sản Phẩm</Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item active col-md-4">
                                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true"><i className="fas fa-phone-square-alt">Hotline:0328883094 </i></a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0" style={{'display': 'flex', 'justifyContent': 'center'}}>
                                <input className="form-control mr-sm-2 active " type="search" placeholder="Search" aria-label="Search" />
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