import React, { useEffect, useReducer, useState } from 'react'
import reducer from '../reducer'
import Podcast from './Podcast'

const Podcasts = () => {

    const initialState = { podcasts: [] }

    // const [podcasts, setPodcasts] = useState([])
    const [state, dispatch] = useReducer(
        reducer, 
        initialState
    )

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/podcasts')
        .then(resp => resp.json())
        .then(pods => {
          if (pods.error) {
            alert(pods.error)
          } else {
            dispatch({type: 'GET_PODCASTS', payload: pods})
          }
        })
    })

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Podcasts? ", state.podcasts)
        // return dispatch({type: 'GET_PODCASTS'})
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
            {state.podcasts.map(pod => (
                <Podcast id={pod.id} name={pod.name} />
            ))}
            <button onClick={handleClick}>Set Podcasts</button>
        </div>
    )
}

export default Podcasts


