import React, { Component } from 'react'
import CButton from './Button'

class TableControls extends Component {
  constructor(props = { count, pageIndex, pageSize, setPageConfig, callApiList }) {
    super(props)
    console.log(props)
    this.toPage = this.toPage.bind(this)
  }

  genPageIndexNumbers(pageIndex, maxPage) {
    let result = [pageIndex]
    for (let i = 1; i < maxPage; i++) {
      let pageIndexNumber = pageIndex + i
      if (pageIndexNumber > maxPage) {
        break
      }
      else {
        result.push(pageIndexNumber)
      }
    }
    return result
  }

  toPage(newPageIndex, maxPage) {
    console.log(newPageIndex)
    let currentPageIndex = this.props.pageIndex
    if (newPageIndex != currentPageIndex
      && newPageIndex > 0
      && newPageIndex <= maxPage) {
      let config = { pageIndex: newPageIndex }
      this.props.setPageConfig(config)
      this.props.callApiList()
    }
  }

  render() {
    let { count, pageIndex, pageSize } = this.props
    let maxPage = Math.ceil(count / pageSize)
    let pageIndexNumbers = this.genPageIndexNumbers(1, maxPage)
    return (
      <div className="table-controls">
        <CButton onClick={() => this.toPage(pageIndex - 1, maxPage)}>&lt;&lt;</CButton>

        {pageIndexNumbers.map((number, index) => {
          let isCurrentPageIndex = (number == pageIndex)
          let clickHandler = () => {

            this.toPage(number, maxPage)
          }
          return isCurrentPageIndex
            ? (
              <CButton
                key={index}
                onClick={clickHandler}
                style={{ textDecoration: 'underline' }}>{number}</CButton>
            )
            : (
              <CButton
                onClick={clickHandler}
                key={index}>{number}</CButton>
            )
        })}
        <CButton onClick={() => this.toPage(pageIndex + 1, maxPage)}>&gt;&gt;</CButton>
      </div>
    )
  }
}

export default TableControls
