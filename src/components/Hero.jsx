import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/coding2.mp4'

const Hero = () => {
    return (
        // <div className='container mx-auto'>
        <div id="hero" className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                Innovative build tools <span className='bg-gradient-to-r from-purple-700 to-purple-950 text-transparent bg-clip-text'>for developers</span>
            </h1>

            {/* Setting max-width to clip the content within that width */}
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ea unde optio vitae et a, mollitia voluptatem doloremque provident autem sed! Quis distinctio libero corrupti!
            </p>

            {/* Two Buttons */}

            <div className='flex justify-center my-10 space-x-6'>
                <a href="#" className='px-3 py-2 bg-gradient-to-r from-purple-700 to-purple-950 rounded-md'>
                    Start for free
                </a>
                <a href="#" className='py-2 px-3 border rounded-md'>Documentation</a>
                {/* gradient from left to right */}
            </div>

            {/* VIDEO SECTION */}
            
            <div className='flex mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                </video>

            </div>

        </div>


        // </div>
    )
}

export default Hero