import React, { Component } from 'react'
import CAdminControler from '../components/parts/AdminControl'
import CAdmidListRequest from '../components/parts/AdminListRequest'

class AdminRequest extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <div className="row">
                    <div className="col-sm-3">
                        <CAdminControler />
                    </div>
                    <div className="col-sm-9">
                        <CAdmidListRequest />
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminRequest