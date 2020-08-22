import React, { Component } from 'react'
import './main.scss'
import { Link } from 'react-router-dom'
import Home from '../../../pages/Home'
import ReactDOM from 'react-dom'

class ItemCategory extends Component {
    constructor(props) {
        super(props)
    }

    toCategory = () => {
        console.log(this.props.link)
        // ReactDOM.render(<Home />, document.getElementById('app'))
    }

    render() {
        let img = this.props.img;
        let categoryName = this.props.name
        let link = this.props.link
        return (
            <div>
                <Link to={"/" + link }>
                    <div className="my-container" onClick={this.toCategory}>
                        <img src={img} alt="Avatar" className="image" alt={categoryName} style={{ width: '100%' }} />
                        <div className="middle">
                            <p className="text-no-opacity">{categoryName}</p>
                            <div className="text">TÌM HIỂU THÊM</div>
                        </div>
                    </div>
                </Link>
            </div >
        )
    }
}

export default ItemCategory