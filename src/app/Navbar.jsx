'use client'
import React from 'react'
import Button from './components/Button'

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className=' w-full fixed flex justify-between items-center z-[999]  '>
        <div className='font-gothic text-[44px] ml-6'>
            JARED<br/>GILLESPIE 
        </div>
        <div>
        <Button isOpen={isOpen}  setIsOpen={setIsOpen}/>
        </div>
    </div>
  )
}

export default Navbar