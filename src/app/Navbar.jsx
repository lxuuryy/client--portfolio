'use client'
import React, {useState} from 'react'
import Button from './components/Button'

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);
    React.useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      React.useEffect(() => {
        // Update opacity based on scroll position
        const newOpacity = Math.max(0, 1 - scrollY / 100);
        setOpacity(newOpacity);
      }, [scrollY]);
  return (
    <div className=' w-full fixed flex justify-between items-center z-[9999]'>
        <div style={{opacity}} className='font-gothic text-[22px] sm:text-[32px] md:text-[44px] ml-6 flex flex-col justify-center items-start'>
          <div>
            JARED<br/>GILLESPIE 
            </div>
            <div className='text-[12px] md:text-[20px] ml-[3px] md:ml-1'>PHOTOGRAPHY</div>
        </div>
        <div>
        <Button isOpen={isOpen}  setIsOpen={setIsOpen}/>
        </div>
    </div>
  )
}

export default Navbar