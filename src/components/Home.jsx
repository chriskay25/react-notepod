import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>WELCOME TO THE NOTEPOD APP!</h1>
            <Link to='/podcasts'>View Podcasts</Link>
        </div>
    )
}

export default Home