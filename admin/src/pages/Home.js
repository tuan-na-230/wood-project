import React, { Component } from 'react'

import CHeader from '../components/pieces/NavBar'
import FlexImages from '../components/pieces/FlexImages'
import CFooter from '../components/pieces/Footer'
import CProductPortfolio from '../components/parts/ProductPortfolio'
import CItemCategory from '../components/parts/ItemCategory'
import CNewProduct from '../components/parts/NewProduct'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CHeader />
        <FlexImages />
        <div className="container">
          <CProductPortfolio />
          <CNewProduct />
        </div>
        <CItemCategory />
        <CFooter />
      </div>
    )
  }
}
export default Home