'use client'
import React from 'react'


function Details() {


        const email = 'jaredgillespie422@gmail.com';
    
        const handleContactClick = () => {
            window.location.href = `mailto:${email}`;
        }

    const [portraits, setPortraits] = React.useState(true)
  return (
    <div>
    <div className='w-full flex justify-evenly mt-[1150px] font-gothic'>
        <div onClick={() => setPortraits(true)} className={`cursor-pointer hover:underline text-[22px] md:text-[32px] ${portraits ? 'underline' : 'none'}  `}>PORTRAITS</div>
        <div onClick={() => setPortraits(false)} className={`cursor-pointer hover:underline text-[22px] md:text-[32px] ${portraits ? 'none' : 'underline'}  `}> LANDSCAPES </div>
    </div>
    {portraits && <div className='w-full flex  flex-col md:flex-row justify-around items-center mt-[100px]  '>
        <div className='flex mb-[50px] md:mb-[0px] '>
            <div>
                <img className='w-[150px] md:w-[200px] ' src='/new1.jpg' alt='image1' />
            </div>
            <div>
            <img src='/new2.jpg' className='w-[150px] md:w-[200px] ml-[20px] mt-[100px]' alt='image1' />
                </div></div>
        <div>
            <div className='for--border pb-[10px] text-[32px] '>PORTRAITS + <br /> HEADSHOTS</div>
            <div className='text-[22px] pt-[10px]'>Let's capture your story with a <br/> stunning professional portrait shoot.</div>
            <div>
                <ul className='ml-[30px] text-[18px] pt-[10px]'>
                <li className=''> - $300 hourly rate</li>
                    <li> - 1 person headshot $250</li>
                    <li> - 2 person $400</li>
                    <li> - for every extra person $150</li>
                </ul>
                <div className='m-[10px] flex justify-center items-center'>         
<button onClick={handleContactClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100 ">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
Get in touch
</span>
</button>
</  div>
            </div>
        </div>
    </div>}
    <div>
    {portraits === false && <div className='w-full flex flex-col md:flex-row justify-around items-center mt-[100px] '>
        <div className='flex flex-col mb-[50px] md:mb-[0px] '>
            <div>
                <img className='w-[200px] md:w-[600px]' src='/Blazing_Sunset_Crop.jpg' alt='image1' />
            </div>
            <div>
            <img src='/Beach_Head.jpg' className=' w-[200px] md:w-[600px] ml-[50px] mt-[50px] md:mt-[100px]' alt='image1' />
                </div></div>
        <div>
            <div className='for--border pb-[10px] text-[32px] '>LANDSCAPES + <br /> PROFESSIONAL SHOOTS</div>
            <div className='text-[22px] pt-[10px]'>Discover the artistry of nature through <br />captivating landscape photography.</div>
            <div>
                <ul className='ml-[30px] text-[18px] pt-[10px]'>
                    <li className=''> - $100 for 15 minutes</li>
                    <li>- $200 for 30 minutes</li>
                    <li>- $300 per hour</li>
                </ul>
       <div className='m-[10px] flex justify-center items-center'>         
<button onClick={handleContactClick}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100 ">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
Get in touch
</span>
</button>
</  div>

            </div>
        </div>
    </div>}
    </div>
    </div>
  )
}

export default Details