import React, { Component } from 'react'
import './main.scss'
import { Link } from 'react-router-dom'

class AdminControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 1
        }
    }

    toPage = (e) => {
        let index = e.target.innerHTML
        console.log(index)
        if (index == 'product') {
            this.setState({
                currentIndex: 1
            })
        } else {
            this.setState({
                currentIndex: 2
            })
        }
    }

    show = () => {
        let index = this.state.currentIndex
        console.log(index)
        if (index == 1) {
            return (
                <div className="admin-control" >
                    <div className="header" style={{ 'color': 'rgb(139, 0, 40)', 'padding': '5px', 'margin': '0px', 'fontSize': '24px' }}>
                        <span>Admin</span>
                    </div>
                    <hr></hr>
                    <div className="row each-row bg-secondary text-white selected">
                        <Link to='/admin/product' className="each-row-text" onClick={this.toPage}>Product</Link>
                    </div>
                    <div className="row each-row bg-secondary text-white">
                        <Link to='/admin/request' className="each-row-text" onClick={this.toPage}>Request</Link>
                    </div>
                </div>
            )
        } else {
            <div className="admin-control" >
                <div className="header">
                    Admin
                    </div>
                <hr></hr>
                <div className="row each-row bg-secondary text-white ">
                    <Link to='/admin/product' className=" each-row-text" onClick={this.toPage}>Product</Link>
                </div>
                <div className="row each-row bg-primary text-white selected">
                    <Link to='/admin/request' className="each-row-text" onClick={this.toPage}>Request</Link>
                </div>
            </div>
        }
    }

    render() {
        return (
            <div>{this.show()}</div>
        )

    }
}

export default AdminControl