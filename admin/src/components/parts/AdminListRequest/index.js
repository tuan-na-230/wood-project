import React, { Component } from 'react'
import Table from '../../pieces/Table'
import TableControls from '../../pieces/TableControls'
import config from '../../../config'

import axios from 'axios'

class AdmidListRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ['name', 'address', 'phoneNumber', 'email', 'content'],
            pageIndex: 1,
            pageSize: null,
            search: '',
            list: [],
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
        let { search } = this.state
        let queryParams = {
          count: true,
          search,
        }
    
        axios.request({
          url: config.domain + '/api/user',
          method: "GET",
          params: queryParams
        })
          .then(res => {
            let count = res.data.count || 0
            this.setState({ count })
          })
      }

    callApiList() {
        let { pageIndex, pageSize, search } = this.state
        let queryParams = {
            pageIndex,
            pageSize,
            search,
        }

        axios.request({
            url: config.domain + '/api/user',
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
                {/* <TableControls
                    count={count}
                    pageSize={pageSize}
                    setPageConfig={this.setPageConfig}
                    pageIndex={pageIndex}
                    callApiList={this.callApiCount} /> */}
            </div>
        )
    }
}

export default AdmidListRequest