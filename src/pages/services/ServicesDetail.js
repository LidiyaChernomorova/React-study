import React from "react"
import {useParams, useHistory, useLocation} from "react-router-dom"

import servicesData from "./ServicesDB"

function ServiceDetail(props) {
    const {serviceId} = useParams();
     console.log(useParams());

     
     const unitFromDB = servicesData.find(service => service._id == serviceId)
     console.log(unitFromDB, 'unitFromDB');

    const history = useHistory();
     console.log('history', history);

    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
        history.replace("")
    }

    return (
        <div className="service-block">
            <h1>Service Detail Page</h1>
            <h3>{unitFromDB.name}</h3>
            <span  style={{color: unitFromDB.color}} class="entypo-heart"></span>
            <div className="service-block__description">{unitFromDB.description}</div>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail
//<button onClick={handleClick}>Go back to all services</button>
