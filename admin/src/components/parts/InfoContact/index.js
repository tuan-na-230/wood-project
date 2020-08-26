import React, { Component } from 'react'

class InfoContact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3 style={{ "color": "rgb(139, 0, 40)" }}>SHOWROOM</h3>
                <p>Địa chỉ: 20 Cát Linh, Đống Đa, Hà Nội.</p>
                <p>Hotline: 1900 63 66 69</p>
                <p>Fax: 024 3733 9255</p>
                <p>Email: info@hungtuy.com.vn</p>
                <p>Website: www.hungtuy.com.vn</p>
            </div>
        )
    }
}

export default InfoContact