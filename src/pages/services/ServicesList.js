import React from "react"
import {Link, useLocation} from "react-router-dom"

import servicesData from "./ServicesDB"

function ServicesList() {
    const location = useLocation()
     console.log('location', location);

    const services = servicesData.map(service => (
        <div key={service._id} className="service-block" style={{background: service.color}}>
            <h3><Link to={`/services/${service._id}`}>{service.name}</Link></h3>
            <div className="service-block__description">{service.description}</div>
        </div>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList