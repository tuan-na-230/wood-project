import React, { Component } from 'react'
import Table from '../../pieces/Table'
import TableControls from '../../pieces/TableControls'
import config from '../../../config'

import axios from 'axios'

class AdmidListProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ['name', 'price', 'image', 'description', 'status', 'category'],
            pageIndex: 1,
            pageSize: 10,
            search: '',
            list: [],
            filter: {
                categoryId: null // Dropdown
              }
        }

        this.callApiList = this.callApiList.bind(this)
        this.callApiCount = this.callApiCount.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    componentDidMount() {
        this.callApiList()
        this.callApiCount()
    }

    setPageConfig(config = { pageIndex, pageSize, search, filter}) {
        this.setState(config)
      }

    callApiCount() {
        let { search, filter } = this.state
        let queryParams = {
          count: true,
          search,
          categoryId: filter.categoryId || ''
        }
    
        axios.request({
          url: config.domain + '/products',
          method: "GET",
          params: queryParams
        })
          .then(res => {
            let count = res.data.count || 0
            this.setState({ count })
          })
      }

    callApiList() {
        let { pageIndex, pageSize, search, filter } = this.state
        let queryParams = {
            pageIndex,
            pageSize,
            search,
            categoryId: filter.categoryId || ''
        }

        axios.request({
            url: config.domain + '/products',
            method: 'GET',
            params: queryParams,
        })
            .then(res => {
                console.log('response', res)
                let list = res.data
                this.setState({ list })
            })
    }

    render() {
        
        let { list, header } = this.state
        let { count, pageIndex, pageSize } = this.state
        console.log(count, pageIndex, pageSize)
        return (
            <div>
                <Table header={header} list={list} />
                <TableControls
                    count={count}
                    pageSize={pageSize}
                    setPageConfig={this.setPageConfig}
                    pageIndex={pageIndex}
                    callApiList={this.callApiCount} />
            </div>
        )
    }
}

export default AdmidListProduct