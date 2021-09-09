import React from 'react'
import { motion } from 'framer-motion'

const Podcast = ({ data }) => {
    return (
        <motion.div className='podcast' whileHover={{scale: 1.1}} transition={{ duration: 1 }}>
          <div className='podcast-image'>
            <img src={data.image} alt='podcast cover' />
          </div>
          <div className='podcast-title'>
            {data.title}
          </div>
        </motion.div>
    )
}

export default Podcast