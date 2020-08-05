import React, { Component } from 'react'
import CFormAddAndUpdate from '../components/parts/FormAddAndUpdate'
import CHeader from '../components/pieces/NavBar'
import FlexImages from '../components/pieces/FlexImages'
import CFooter from '../components/pieces/Footer'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAddBlog">
          Thêm sản phẩm
        </button>
        <CHeader />
        <FlexImages />
        <CFooter />
        {/* <CFormAddAndUpdate /> */}
        {/* <CFooter></CFooter> */}
      </div>
    )
  }
}
export default Home