import React, { Component } from 'react'
import './main.scss'

class AdminControl extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <div className="admin-control position-sticky" >
                    <div className="header">
                        Admin
                    </div>
                    <hr></hr>
                    <div className="row each-row selected bg-primary text-white">
                        <p>Dashboard</p>
                    </div>
                    <div className="row each-row bg-secondary text-white">
                        <p>Table list</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminControl