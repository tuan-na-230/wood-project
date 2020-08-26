import React, { Component } from 'react'

class MapContact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{"padding-bottom": "10px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.731470280444!2d105.8490999142449!3d21.003398594021085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac74c1627d49%3A0x16397bfc0839cb9d!2zMjU1IELhuqFjaCBNYWksIEPhuqd1IEThu4FuLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1597805819400!5m2!1svi!2s" frameBorder={0} style={{border: 0, width: "100%", height: "300px"}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
        )
    }
}

export default MapContact