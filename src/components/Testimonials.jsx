import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
    return (
        <div className='mt-20 tracking-wide'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people are saying</h2>

            {/* cards section 
        making horizontally center*/}
            <div className='flex flex-wrap justify-center'>
                {
                    testimonials.map((option, i) => (
                        <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                            <div className='bg-neutral rounded-md p-6 text-md border
                        border-neutral-800 font-thin  text-neutral-300'>
                                <p>{option.text}</p>

                                {/* user image and name */}
                                <div className='flex mt-8 items-start'>
                                    <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={option.image} alt={option.user} />
                                {/* Name and compnay name */}
                                    <div>
                                        <h6>{option.user}</h6>
                                        <span className='text-sm font-normal italic text-neutral-400'>{option.company}</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default Testimonials