import React, { Component } from 'react'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CProductBySearch from '../components/parts/productBySearch'
import config from '../config'

class Search extends Component {
    constructor(props) {
        super(props)
    }


    search = () => {
        let infoSearch = document.getElementById('formSearch').inputSearch.value
        let queryParam = {
            pageSize: null,
            search: infoSearch,
        }
        let url = config.domain + '/products'
        axios({
            method: 'get',
            url: url,
            params: queryParam
        })
            .then(res => {
                console.log(res.data)
                document.getElementById('formSearch').inputSearch.value = ''
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div>
                <CHeader />
                {/* <div className="container">
                    <CProductBySearch listProduct={this.props.listProduct} />
                </div> */}
                <CFooter />
            </div>
        )
    }
}

export default Search