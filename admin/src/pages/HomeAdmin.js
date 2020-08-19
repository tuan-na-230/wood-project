import React, { Component } from 'react'
import AdmminControl from '../components/parts/AdminControl'
import FormAddAndUpdate from '../components/parts/FormAddAndUpdate'
import AdmidListProduct from '../components/parts/AdminListProduct'

class HomeAdmin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <div className="container-fluid">
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
            </div>
        )
    }
}

export default HomeAdmin