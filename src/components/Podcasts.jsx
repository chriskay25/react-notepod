import React, { useState } from 'react'
import Podcast from './Podcast'
import { apiKey } from '../secret'

const Podcasts = () => {
    const [podData, setPodData] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        fetch("https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=67&page=2&region=us&safe_mode=1", {
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
        <div className='scroller'>
            <div className='podcasts'>
                {podData ? podData.map(pod => (
                    <Podcast key={pod.id} data={pod}/>
                )): <div>empty</div>}
            </div>
            <button onClick={handleClick}>Set Podcasts</button>
        </div>
    )
}

export default Podcasts


