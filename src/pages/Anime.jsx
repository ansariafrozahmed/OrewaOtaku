import React from 'react'
import { motion } from 'framer-motion'

const Anime = () => {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
        >Anime</motion.div>
    )
}

export default Anime