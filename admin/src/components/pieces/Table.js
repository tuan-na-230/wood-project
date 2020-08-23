import React, { Component } from 'react'

class Table extends Component {
  constructor(props = { list, header }) {
    super(props)
  }

  renderList(list) {
    return list.map((item, index) => {
      let { _id, name, price, image, description, status, category } = item
      if(!price) {
        let { _id, name, address, phoneNumber, email, content } = item
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>{content}</td>
          </tr>
        )
      } else {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>{image}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td>{category}</td>
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

//   getCategoryTitles(categories = []) {
//     return categories
//       .map(item => item.title || '')
//       .join()
//   }

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