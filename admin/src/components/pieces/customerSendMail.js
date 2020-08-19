import React, { Component } from 'react'

class customerSendMail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerMail: {},
        }
    }

    fileUploadHandler = (event) => {
        this.setState({
            customerMail: event.value
        })
        console.log(this.state.customerMail)
        const fd = new FormData();
        fd.append("customerMail", this.state.customerMail)
        let url = config.domain + '/customer/customerSendMail'
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
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Gửi</button>
                </form>
            </div>
        )
    }
}

export default customerSendMail