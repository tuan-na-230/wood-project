import React, { Component } from 'react'
import './main.scss'
import {Link} from 'react-router-dom'

class AdminControl extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="admin-control" >
                    <div className="header">
                        Admin
                    </div>
                    <hr></hr>
                    <div className="row each-row selected bg-primary text-white">
                        <p>Dashboard</p>
                    </div>
                    <div className="row each-row bg-secondary text-white">
                        <Link to='/admin/product' className="each-row-text">Product</Link>
                    </div>
                    <div className="row each-row bg-secondary text-white">
                        <Link to='/admin/request' className="each-row-text">Request</Link>
                    </div>
                </div>
        )
    }
}

export default AdminControl