import React, { Component } from 'react'
import axios from 'axios'
import CUploadFile from '../../pieces/UploadImage'
import config from '../../../config'

class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productSelected: {},
            id: this.props.idProduct,
            selectedFile: {},
            urlSourceImage: 'https://via.placeholder.com/150'
        }
    }

    componentDidMount() {
        this.getProduct()
    }

    getProduct = () => {
        let id = this.state.id;
        let url = config.domain + '/products/' + id
        axios({
            method: 'get',
            url: url,
        })
            .then(
                res => {
                    console.log(res)
                    this.setState({ productSelected: res.data, urlSourceImage: res.data.image })
                }
            )
            .catch(error => { console.log(error) })
    }

    updateProduct = () => {
        let form = document.getElementById("formUpdateProduct" + this.state.id);
        let data = {
            _id: this.state.id,
            name: form.name.value,
            price: form.price.value,
            image: this.state.urlSourceImage,
            description: form.description.value,
            status: form.status.value,
            category: form.category.value,
        }

        axios.request({
            url: config.domain + '/products',
            method: 'put',
            data: data,
        })
            .then(res => {
                console.log(res)
                this.props.callApiUpdate();
                let id = "#modalUpdateProduct" + this.state.id
                $(id).modal('hide');
                window.alert("Sửa sản phẩm thành công!")
            })
            .catch(error => { console.log(error) })
    }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        this.setState({
            urlSourceImage: config.domain + "/src/assets/images/" + this.state.selectedFile.name
        })
        setTimeout(() => {
            document.getElementById('imageUploaded').src = this.state.urlSourceImage;
        }, 1000)
        const fd = new FormData();
        fd.append("image", this.state.selectedFile)
        let url = config.domain + '/products/uploadImage'
        axios({
            method: 'post',
            url: url,
            data: fd
        })
            .then(
                res => {
                    console.log(res)
                }
            )
            .catch(error => { console.log(error) })
    }

    render() {
        let { _id, name, price, category, description, status } = this.state.productSelected;
        return (
            <div>
                <div>
                    <div>
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={"#modalUpdateProduct" + _id}>
                            Sửa
                        </button>
                        <div className="modal fade" id={"modalUpdateProduct" + _id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Thêm product</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <form id={"formUpdateProduct" + _id}>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Tên sản phẩm</label>
                                                <input className="form-control" id="name" defaultValue={name} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Giá</label>
                                                <input className="form-control" id="price" defaultValue={price} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">description</label>
                                                <textarea className="form-control" id="description" defaultValue={description} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="status">status</label>
                                                <input className="form-control" id="status" defaultValue={status} />
                                            </div>
                                            {/* <div className="form-group">
                                                <label htmlFor="category">category</label>
                                                <textarea className="form-control" id="category" defaultValue={category} />
                                            </div> */}
                                            <div class="form-group">
                                                <label for="category">Example select</label>
                                                <select class="form-control" id="category">
                                                    <option>noi-that-phong-khach</option>
                                                    <option>noi-that-phong-ngu</option>
                                                    <option>noi-that-phong-bep</option>
                                                    <option>noi-that-phong-cho</option>
                                                    <option>noi-that-tre-em</option>
                                                    <option>noi-that-ngoai-troi</option>
                                                    <option>noi-that-van-phong</option>
                                                    <option>sofa</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="file" id="image" onChange={this.fileSelectedHandler} accept="image/*" />
                                                <button className="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>
                                                <img id="imageUploaded" src={this.state.urlSourceImage} alt="anh" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-warning" onClick={this.updateProduct}>Sửa</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateForm