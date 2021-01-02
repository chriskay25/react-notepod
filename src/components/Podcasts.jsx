import React, { useState } from 'react'
import Podcast from './Podcast'
import { apiKey } from '../secret'

const Podcasts = () => {

    const [podData, setPodData] = useState([])


    const handleClick = (e) => {
        e.preventDefault()
        fetch("https://listen-api.listennotes.com/api/v2/genres", {
            method: 'GET',
            headers: {
                "X-ListenAPI-Key": apiKey
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setPodData(data.podcasts)
                console.log("data: ", data)
            })
            console.log("podData: ", podData)
    }

    return (
        <div className='podcasts'>
            {podData ? podData.map(pod => (
                <ul>
                    <li><Podcast key={pod.id} data={pod}/></li>
                </ul>
            )): <div>empty</div>}
            <button onClick={handleClick}>Set Podcasts</button>
        </div>
    )
}

export default Podcasts


