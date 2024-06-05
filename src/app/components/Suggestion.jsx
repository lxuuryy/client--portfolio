'use client'
import React from 'react'
import Word from './Word'




function Suggestion({ url, guestName, newEpisode, episode, title}) {



    const paragraph = 'LATEST EPISODE'
    const paragraph2 ='Ep.06:  VC, Investment, and Startups in Emerging Technologies '
    const paragraph3 = '"Thank You Ben for your spiritual wisdom and insight"-Ronald McDonald'
    const paragraph4 = '-Hunter Watkin'
    const paragraph5 = '"cool podcast, I love the energy and the vibe" -Sam Allerdyce'

   
  return (
    <div className='relative  '>

    
      

        <div>
          <div className='lg:text-xl'>
          <Word paragraph={paragraph} />
          </div>
          <div className='lg:text-4xl sm:text-md '>
          <Word paragraph={paragraph2} />
          </div>
          <div className='lg:text-4xl sm:text-md'>
          <Word paragraph={paragraph2} />
          {/* Add more <Word> components as needed for other data fields */}
          </div>
        </div>

        <div>
       
        </div>
      <div className='h-[500px]'></div>
    </div>
  )
}

export default Suggestion