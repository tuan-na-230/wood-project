import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class customerSendMail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerMail: {},
        }
        this.sendEmail = this.sendEmail.bind(this)
    }

    sendEmail = (event) => {
        event.preventDefault();
        console.log('a')
        let result = document.getElementById('inputEmail').value
        let data = {
            email: result,
            address: '',
            phoneNumber: parseInt(''),
            content: '',
            name: '',
        }
        let url = config.domain + "/api/user"
        axios({
            method: 'post',
            url: url,
            data: data
        })
            .then(res => {
                console.log(res)
                document.getElementById('inputEmail').value = ''
                window.alert("Cảm ơn bạn đã liên hệ với chúng tôi!");
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div>
                <form id="formSendMail" className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.sendEmail}>Gửi</button>
                </form>
            </div>
        )
    }
}

export default customerSendMail