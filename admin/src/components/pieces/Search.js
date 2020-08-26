import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import history from '../../history'

class Search extends Component {
    constructor(props) {
        super(props)

        this.toSearchPage = this.toSearchPage.bind(this)
    }

    toSearchPage = () => {
        // let data = document.getElementById('formSearch').inputSearch.value
        (history.push({
            pathname: '/search',
            // search: `?"data"=` + data
        }))
    }

    render() {
        return (
            <div>
                <form id="formSearch" className="form-inline my-2 my-lg-0" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                    <input name="inputSearch" className="form-control mr-sm-2 active " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 active" type="button" onClick={this.toSearchPage}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search