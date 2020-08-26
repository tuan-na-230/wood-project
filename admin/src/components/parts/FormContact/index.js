import React, { Component } from 'react'
import CButton from '../../pieces/Button'
import config from '../../../config'
import axios from 'axios'
class FormContact extends Component {
    constructor(props) {
        super(props)
    }
    getInfor =(e) =>{
        e.preventDefault()
         let data ={
             name: document.getElementById('fullName').value,
             address : document.getElementById("address").value,
             phoneNumber : document.getElementById('phoneNumber').value,
             email : document.getElementById('email').value,
             content : document.getElementById('content').value
         }
         axios.request({
            url: config.domain + '/api/user',
            method: 'POST',
            data: data,
        })
            .then(res => {
                console.log(res)
                
                document.getElementById('fullName').value = ''
                document.getElementById('address').value = ''
                document.getElementById('phoneNumber').value = ''
                document.getElementById('email').value = ''
                document.getElementById('content').value = ''
                window.alert("Cảm ơn bạn đã liên hệ với chúng tôi!");
                
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div>
                <h3 style={{ "color": "rgb(139, 0, 40)" }}>LIÊN HỆ</h3>
                <form id="formAddInfo">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Họ và tên*"></input>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="text" name="address" id="address" className="form-control" placeholder="Địa chỉ*"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="number" name="fullName" id="phoneNumber" className="form-control" placeholder="Số điện thoại*"></input>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input type="email" name="address" id="email" className="form-control" placeholder="Email*"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                            <textarea className="form-control rounded-0" name="content" id="content" rows="4" className="form-control" placeholder="Nhập nội dung*"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={this.getInfor} className="btn btn-primary">Gửi yêu cầu</button>
                </form>
            </div>
        )
    }
}
export default FormContact