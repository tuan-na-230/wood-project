import React, { Component } from 'react'
import CHeader from '../components/pieces/NavBar'
import CFooter from '../components/pieces/Footer'
import CInfoContact from '../components/parts/InfoContact'
import CFormContact from '../components/parts/FormContact'
import CMapContact from '../components/parts/MapContact'

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <CHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <CInfoContact />
                        </div>
                        <div className="col-sm-6">
                            <CFormContact />
                        </div>
                    </div>
                    <div className="row">
                        <CMapContact />
                    </div>
                </div>

                <CFooter />
            </div>
        )
    }
}

export default Contact