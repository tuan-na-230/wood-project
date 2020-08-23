import React, { Component } from 'react'
import AdmminControl from '../components/parts/AdminControl'
import FormAddAndUpdate from '../components/parts/FormAddAndUpdate'
import AdmidListProduct from '../components/parts/AdminListProduct'

class AdminProduct extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <AdmminControl />
                    </div>
                    <div className="col-sm-9">
                        <FormAddAndUpdate />
                        <AdmidListProduct />
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminProduct