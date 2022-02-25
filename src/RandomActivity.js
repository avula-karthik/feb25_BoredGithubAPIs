import axios from "axios";
import React, { useEffect, useState } from "react";
const RandomActivity = () => {
    let [activity, setActivity] = useState('Loading..')
    useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity")
            .then(response => setActivity(response.data.activity))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <i className="fa fa-2x">&#xf0eb; <span></span>
            <h2 className='activitytext'>{activity}</h2>
            </i>
        </div>

    )
}
export default RandomActivity