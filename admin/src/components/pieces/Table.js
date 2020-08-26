import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import CUpdateProduct from '../../components/parts/FormUpdate'

class Table extends Component {
  constructor(props = { list, header, callApiUpdate }) {
    super(props)

    this.fix = this.fix.bind(this)
    this.del = this.del.bind(this)
  }

  fix = (e) => {
    return <CUpdateProduct idProduct={e.target.id} />
  }

  del = (e) => {
    let result = window.confirm("Bạn có muốn xóa sản phẩm này")
    if (result) {
      this.callApiDel(e.target.id)
    }
  }

  callApiDel = (id) => {
    let url = config.domain + '/products/' + id;
    axios({
      method: 'delete',
      url: url,
    })
      .then(res => {
        console.log(res)
        this.props.callApiUpdate()
      })
      .catch(error => { console.log(error) })
  }

  renderList(list) {
    return list.map((item, index) => {
      let { _id, name, price, image, description, status, category } = item
      if (!price) {
        let { _id, name, address, phoneNumber, email, content } = item
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>{content}</td>
            <td>
              <button className="btn btn-secondary">Ẩn</button>
            </td>
          </tr>
        )
      } else {
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{price}</td>
            <td><img src={image} style={{"height": '50px', "width":"auto"}}/></td>
            <td>{description}</td>
            <td>{status}</td>
            <td>{category}</td>
            <td>
              <CUpdateProduct idProduct={_id} callApiUpdate={this.props.callApiUpdate} />
              <button id={_id} className="btn btn-danger" onClick={this.del}>Xóa</button>
            </td>
          </tr>
        )
      }
    })
  }

  renderHeader(header) {
    return (
      <tr>
        {header.map((item, index) => {
          return (
            <th key={index}>{item}</th>
          )
        })}
      </tr>
    )
  }

  render() {
    let list = this.props.list || []
    let header = this.props.header || []
    console.log(list)
    return (
      <table className="c-table table table-striped">
        <thead>
          {this.renderHeader(header)}
        </thead>
        <tbody>
          {this.renderList(list)}
        </tbody>
      </table>
    )
  }
}

export default Table