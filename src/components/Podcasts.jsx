import React, { useEffect, useReducer, useState } from 'react'
import reducer from '../reducer'
import { getPodcasts } from '../actions/getPodcasts'

const Podcasts = () => {

    // const [podcasts, setPodcasts] = useState([])
    const [{ podcasts }, dispatch] = useReducer(
        reducer, 
        { podcasts: [] }
    )

    // useEffect(() => {
    //     return dispatch({type: 'GET_PODCASTS'})
    // })

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Event: ", e)
        return dispatch({type: 'GET_PODCASTS', getPodcasts})
    }

    return (
        // podcasts ? 
        // <div>
        //     {podcasts.map((pod, idx) => (
        //         <div key={idx}>
        //             {pod.name}
        //         </div>
        //     ))}
        // </div> :
        // <div>nothing</div>
        <div>
            <button onClick={handleClick}>Set Podcasts</button>
        </div>
    )
}

export default Podcasts


