import React, { Component } from 'react'
import UploadImage from '../../pieces/UploadImage'

import { Modal, Button } from 'react-bootstrap'

class FromAddAndUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        // this.close() = this.close().bind(this)
        // this.open() = this.open().bind(this)
    }
    close() {
        console.log('a')
        this.setState({
            showModal: false
        })
    }
    open() {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modalAddBlog" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thêm product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <form id="dataBlog">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="name">Tên sản phẩm</label>
                                        <textarea className="form-control" id="name" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Giá</label>
                                        <textarea className="form-control" id="price" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">description</label>
                                        <textarea className="form-control" id="description" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">status</label>
                                        <textarea className="form-control" id="status" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">category</label>
                                        <textarea className="form-control" id="category" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Ảnh</label>
                                        <input type="file" id="image" name="image" accept="image/*" onchange="controller.uploadImage()" />
                                        <img id="imgShow" style={{ width: '200px', display: 'none' }} alt="anh" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onclick="controller.addProduct()">Tạo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <UploadImage />
            </div>
        )
    }
}

export default FromAddAndUpdate