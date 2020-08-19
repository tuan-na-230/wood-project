import React, { Component } from 'react'
import config from '../../config'
import axios from 'axios'
import '../../scss/main.scss'

class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: {},
            urlSourceImage: {}
        }
    }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = (event) => {
        this.setState({
            urlSourceImage: config.domain + "/images/" + this.state.selectedFile.name
        })
        console.log(this.state.urlSourceImage)
        const fd = new FormData();
        fd.append("image", this.state.selectedFile)
        let url = config.domain + '/products/uploadImage'
        axios({
            method: 'post',
            url: url,
            data: fd
        }) 
            .then(res => {console.log(res)})
            .catch(error => {console.log(error)})
    }

    render() {
        return (
            <div> 
                <input type="file" onChange={this.fileSelectedHandler} accept="image/*" />
                <button className="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>
                <img src={this.state.urlSourceImage} alt="anh" />
            </div>
        )
    }
}

export default UploadImage