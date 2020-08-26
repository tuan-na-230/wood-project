import React, { Component } from 'react'
import '../../scss/main.scss'
import config from '../../config'
class FlexImages extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item " data-interval={5000} style={{ "width": '100vw', 'height': '100vh' }}>
                            <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/noi-that-1-1590202169.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                    <h4>Phòng Khách</h4>
                                    <p>Phong cách sang trọng, tiện nghi</p>
                                </div>
                        </div>
                        <div className="carousel-item active" data-interval={5000} style={{ "width": '100vw', 'height': '100vh' }}>
                            <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/category/sizechart/gach-op-lat-title-1590663154.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                    <h4>Sofa</h4>
                                    <p>Phong cách hiện đại , hòa nhoáng</p>
                                </div>
                        </div>
                        <div className="carousel-item" data-interval={5000} style={{ "width": '100vw', 'height': '100vh' }}>
                            <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/category/sizechart/show1-1521885974.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            <div className='content-img'>
                                    <h4>Đèn trang trí</h4>
                                    <p>Nhập khẩu từ châu Âu với nhiều mẫu hiện đai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default FlexImages