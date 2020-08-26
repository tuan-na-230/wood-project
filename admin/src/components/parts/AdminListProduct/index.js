import React, { Component } from 'react'
import Table from '../../pieces/Table'
import TableControls from '../../pieces/TableControls'
import config from '../../../config'

import axios from 'axios'

class AdmidListProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ['Name', 'Price', 'Image', 'Description', 'Status', 'Category', 'Action'],
            pageIndex: 1,
            pageSize: 10,
            search: '',
            list: [],
            filter: {
                category: null // Dropdown
            }
        }
        this.callApiList = this.callApiList.bind(this)
        this.callApiCount = this.callApiCount.bind(this)
        this.setPageConfig = this.setPageConfig.bind(this)
    }

    getDerivedStateFromProps () {
        this.callApiList()
    }

    componentDidMount() {
        this.callApiList()
        this.callApiCount()
    }

    setPageConfig(config = { pageIndex, pageSize, search, filter }) {
        this.setState(config)
    }

    callApiCount() {
        let { search, filter } = this.state
        let queryParams = {
            count: true,
            search,
            category: filter.category || ''
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
            category: filter.category || ''
        }
        console.log('vao')

        axios.request({
            url: config.domain + '/products',
            method: 'GET',
            params: queryParams,
        })
            .then(res => {
                let list1 = res.data
                this.setState({ list: list1 })
            })
    }

    render() {
        let { list, header } = this.state
        let { count, pageIndex, pageSize } = this.state
        console.log(count, pageIndex, pageSize)
        return (
            <div>
                <Table header={header} list={list} callApiUpdate={this.callApiList} />
                <TableControls
                    count={count}
                    pageSize={pageSize}
                    setPageConfig={this.setPageConfig}
                    pageIndex={pageIndex}
                    callApiList={this.callApiList} />
            </div>
        )
    }
}

export default AdmidListProduct