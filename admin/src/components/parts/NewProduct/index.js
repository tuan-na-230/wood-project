import React, { Component } from 'react'
import './t2.css'
import './t1.css'
import './index.scss'
import './owl.carousel'
class NewProduct extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.autoPlay()
    }
    autoPlay = () => {
        $(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
            $('.play').on('click', function () {
                owl.trigger('play.owl.autoplay', [1000])
            })
            $('.stop').on('click', function () {
                owl.trigger('stop.owl.autoplay')
            })
        })
    }
    render() {
        return (
            <div style={{ "marginTop": "20px", "color": "#8b0028", "fontWeight": "500" }}>
                <section className="title">
                    <div className="">
                        <div className="large-12 columns" style={{ "textAlign": "center" }}>
                            <h3>Sản phẩm mới</h3>
                        </div>
                    </div>
                </section>
                <section id="demos">
                    <div className="">
                        <div className="large-12 columns">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/products/1498/1513/s400_0/bon-cau-dien-tu-daelim-smartlet-8000-ct-1580727344.jpg" alt="" />
                                    <div className='item-content'>
                                        <p>Bồn cầu điện tử Daelim Smartlet 8000</p>
                                        <i>MS: Cape Cod 760330000AS0000</i>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/products/1498/1513/s400_0/bon-tam-duravit-frestanding-durasquare-1555986589.jpg" alt="" />
                                    <div className='item-content'>
                                        <p>Bồn tắm Duravit Frestanding DuraSquare</p>
                                        <i>MS: Cape Cod 760330000ASsasa</i>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/products/1498/1513/s400_0/den-chum-castro--9183-80-ct-1557303356.jpg " alt="" />
                                    <div className='item-content'>
                                        <p>Đèn chùm Castro Lighting - Mondrian/9183.80</p>
                                        <i>MS: Cape Cod DC0330000AS0000</i>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/products/1498/1513/s400_0/bon-cau-dien-tu-daelim-smartlet-800-1580727743.jpg" alt="" />
                                    <div className='item-content'>
                                        <p>Bồn cầu điện tử Daelims Smartlet 800</p>
                                        <i>MS: Cape Cod 900330000AS0000</i>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/products/1498/1513/s400_0/bon-tam-massage-duravit-cape-cod-760330-kg-1575002530.jpg" alt="" />
                                    <div className='item-content'>
                                        <p>Bồn tắm Massage Duravit Cape Cod 760330</p>
                                        <i>MS: Cape Cod 760330000AS0Ms00</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default NewProduct