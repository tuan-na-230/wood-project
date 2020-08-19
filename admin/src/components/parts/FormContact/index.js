import React, { Component } from 'react'

class FormContact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
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
                    <button type="submit" className="btn btn-primary">Gửi yêu cầu</button>
                </form>
            </div>
        )
    }
}

export default FormContact