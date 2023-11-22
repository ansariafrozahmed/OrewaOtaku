import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {

    const [data, setData] = useState()


    const AboutDataFunc = async () => {
        const url = await fetch('https://sagartech.online/ansariafroz/wp-json/wp/v2/about?acf_format=standard&_fields=id,acf')
        const res = await url.json()
        // console.log(res[0])
        setData(res[0])
    }

    useEffect(() => {
        AboutDataFunc()
    }, [])

    if (!data) {
        // Return loading state or handle it according to your requirements
        return <div>Loading...</div>;
    }

    const { acf } = data;

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className='w-full lg:flex items-center justify-center'
        >
            <div className='w-full lg:w-[50%]'>

                <img src={acf.image} alt={acf.heading} className='h-auto' />

            </div>
            <div className='w-full px-2 text-center lg:text-left lg:pr-10 lg:w-[50%]'>
                <h1 className='text-5xl font-semibold mb-5 uppercase'>{acf.heading}</h1>
                <p className='text-[1.1rem] text-justify lg:pr-20'>{acf.desc}</p>
            </div>
        </motion.div>
    )
}

export default About