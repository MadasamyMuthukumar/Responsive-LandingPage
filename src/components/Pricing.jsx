import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2, SpaceIcon } from 'lucide-react'

const Pricing = () => {
  return (
    <div id="pricing" className='mt-8 sm:mt-10 md:mt-10'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>

        {/* Cards */}
        <div className='flex flex-wrap'>
            {
                pricingOptions.map((option,i)=>(
                    <div key={i} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-2xl mb-8'>{option.title}
                            {option.title == "Pro" && (
                                <span className='bg-gradient-to-r from-purple-700 to-purple-950 text-transparent bg-clip-text text-xl mb-4 ml-2'> (Most Popular)</span>
                            )}
                        </p>

                        {/* price */}
                        <p className='mb-8'>
                            <span className='text-3xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>

                        {/* features */}
                        <ul>
                            {
                                option.features.map((feature,i)=>(
                                    <li key={i} className='flex mt-8 justify-items-center'>
                                        <CheckCircle2 />
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* Subscribe button */}

                        <a href="#" className='flex justify-center items-center text-center w-full
                        h-12 mt-20 tracking-tight text-xl hover:bg-purple-900 border border-purple-900
                        rounded-lg transition duration-200'>Subscribe</a>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing
