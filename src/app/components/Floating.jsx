'use client'
import React from 'react'
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion'






function Floating() {

    const [active, setActive] = React.useState(false)
    const [active2, setActive2] = React.useState(false)
    const [active3, setActive3] = React.useState(false)
    const [active4, setActive4] = React.useState(false)

    React.useEffect(() => {

        setTimeout(() => {
            setActive(true)
        }, 4000)
        setTimeout(() => {
            setActive2(true)
        }, 4300)
        setTimeout(() => {
            setActive3(true)
        }, 4300)
        setTimeout(() => {
            setActive4(true)
        }, 4000)

    }, [])
  return (
    <div className='  z-[99] overflow-hidden' >
        <AnimatePresence>
        {!active && 
        <motion.div initial={{opacity: 0, y:600}}  transition={{duration: 2, delay: 0.2, ease:'easeInOut'}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: -300}}className='
        absolute  overflow-hidden w-[150px] mt-[300px] ml-[50px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] xl:mt-[200px] 2xl:ml-[300px]  '>
        <Image  src="/Beach_Head.jpg" alt="Ambition Podcast" className='' width={800} height={400} />
      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {!active2 &&
      <motion.div initial={{opacity: 0, y:600}} transition={{duration: 2, delay: 0.4, ease:'easeInOut'}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: -300}} className='
      absolute  overflow-hidden w-[150px] ml-[30px] mt-[500px] sm:w-[200px] md:w-[300px] md:mt-[600px] lg:w-[400px] 2xl:w-[500px]  2xl:ml-[400px]  '>
        <Image  src="/image1.jpg" alt="Ambition Podcast" className='' width={800} height={400} />
      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
      {!active3 &&
      <motion.div initial={{opacity: 0, y:600}} transition={{duration: 2, delay: 0.3, ease:'easeInOut'}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: -300}} className='
      absolute overflow-hidden w-[150px] mt-[300px] ml-[220px] sm:w-[200px] sm:ml-[420px] md:w-[300px] lg:w-[400px] lg:ml-[600px] xl:w-[500px] xl:ml-[700px] xl:mt-[200px] 2xl:ml-[1100px]'>
        <Image  src="/image2.jpg" alt="Ambition Podcast" className='' width={800} height={400} />
      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
      { !active4 && <motion.div initial={{opacity: 0, y:600}} transition={{duration: 2, delay: 0.6, ease:'easeInOut'}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: -300}} className='
      absolute overflow-hidden w-[150px] mt-[500px] ml-[230px] sm:w-[200px] sm:ml-[420px] md:w-[300px] lg:w-[400px] lg:ml-[700px] lg:mt-[600px] xl:w-[500px] xl:ml-[750px] 2xl:ml-[1200px] xl:mt-[550px]'>
        <Image  src="/Blazing_Sunset_Crop.jpg" alt="Ambition Podcast" className='' width={800} height={400} />
      </motion.div>} 
      </AnimatePresence>
    </div>
  )
}

export default Floating