import React, { Component } from 'react'

import CHeader from '../components/pieces/NavBar'
import FlexImages from '../components/pieces/FlexImages'
import CFooter from '../components/pieces/Footer'
import CProductPortfolio from '../components/parts/ProductPortfolio'

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
        </div>
        <CFooter />
      </div>
    )
  }
}
export default Home