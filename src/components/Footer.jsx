import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <footer id="footer" className='mt-20 border-t py-10 border-neutral-700'>
        {/* Making grid to display footer columns 
        RESOURCES*/}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full mx-auto'>
            <div className='md:justify-self-center'>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>

                <ul className='space-y-2'>
                    {
                        resourcesLinks.map((option,i)=>(
                            <li key={i}>
                                    <a href={option.href} className='text-neutral-300 hover:text-white'>
                                        {option.text}
                                   </a>
                            </li>

                        ))
                    }

                </ul>
            </div>

            {/* PLATFORMS */}
            <div className='md:justify-self-center'>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>

                <ul className='space-y-2'>
                    {
                        platformLinks.map((option,i)=>(
                            <li key={i}>
                                    <a href={option.href} className='text-neutral-300 hover:text-white'>
                                        {option.text}
                                   </a>
                            </li>

                        ))
                    }

                </ul>
            </div>

            {/* COMMUNITY */}
            <div className='md:justify-self-center'>
                <h3 className='text-md font-semibold mb-4'>Community</h3>

                <ul className='space-y-2'>
                    {
                        communityLinks.map((option,i)=>(
                            <li key={i}>
                                    <a href={option.href} className='text-neutral-300 hover:text-white'>
                                        {option.text}
                                   </a>
                            </li>

                        ))
                    }

                </ul>
            </div>

        </div>

    </footer>
  )
}

export default Footer