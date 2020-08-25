import React, { Component } from 'react'
import './t2.css'
import './t1.css'

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
            <div style={{"marginTop": "20px", "color": "#8b0028", "fontWeight": "500"}}>
                <section className="title">
                    <div className="">
                        <div className="large-12 columns" style={{"textAlign": "center"}}>
                            <h3>Sản phẩm mới</h3>
                        </div>
                    </div>
                </section>

                <section id="demos">
                    <div className="">
                        <div className="large-12 columns">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="https://hungtuy.com.vn/mediacenter/media/images/1498/menu/icons/s900_0/gach-op-lat-2-1590406300.jpg" alt="" />
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