'use client'
import React, {useRef} from "react";
import Image from "next/image";
import {useScroll, useTransform, MotionValue, motion } from 'framer-motion'

import useDimension from './useDimension'


export default function Home() {

  const {  height } = useDimension(); 



  const ref= useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, height*2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height*3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height*1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height*3])
 
  const images = [
    '/Ben Chair Portrait 4.jpg',
    '/Sincidium Portrait 6.jpg',
    '/Ben and Oliver 2.jpg',
    '/Ben and Oliver 3.jpg',
    '/Ben and Oliver 4.jpg',
    '/Ben Chair Portrait 2.jpg',
    '/Ben Chair Portrait 6.jpg',
    '/Ben Pose 2.jpg',
    '/Sincidium Portrait 1.jpg',
    '/Sincidium Portrait 4.jpg',
    '/Sincidium Portrait 5.jpg',
    '/Sincidium Portrait 7.jpg',
    '/Sincidium Portrait 14.jpg',

  ]

  
  return (
    <main className="para">
      <div className="h-[100vh]">
        <div className="h-[100%] bg-white flex items-center justify-end mr-[50px] ">
          <motion.h1 initial={{opacity:0}} transition={{duration:0.5, delay: 1}} whileInView={{opacity:1}} viewPort={{once:true}} className="text-2xl md:text-5xl font-gothic space-y-2 ">I do professional shoots as well, <br />
          <span className="block mt-4">here are just some of them</span></motion.h1>
        </div>
      </div>
      <div ref={ref}  className="h-[175vh] flex bg-white gap-[2vw] box-border overflow-hidden ">
        <Column images={[images[0], images[1], images[2]]} y={y} top={'-45%'} />
        <Column images={[images[3], images[4], images[5]]} y={y2} top={'-100.5%'}/>
        <Column images={[images[6], images[7], images[8]]} y={y3} top={'-45.5%'}/>
        <Column images={[images[9], images[10], images[11]]} y={y4} top={'-100%'}/>
      </div>
        <Form />
    </main>
  );
}

const Column =({images, y, top}) => {
  return (
    <motion.div style={{y:y, top:top}} className="flex flex-col w-[25%] h-[100%] min-w-[50px] relative  ">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-full my-2 ">
          <Image className="rounded-xl " src={image} layout="fill" alt={image} objectFit="cover"  />
        </div>
      ))}
    </motion.div>)
}

const Form = () => {
  const goUp =useRef(null)

  const {scrollYProgress} = useScroll({
     target: goUp,
     offset: ['start end', 'end start']
  })
 
     const movingUp = useTransform(scrollYProgress, [0, 1], [200, -200])
  return (
    <div className="h-[100vh]">
        <motion.div ref={goUp} style={{y:movingUp}} className="h-[100%] w-full bg-white flex items-center justify-center">
          <motion.h1 initial={{opacity: 0}} transition={{duration: 0.5, delay: 0.5}} whileInView={{opacity:1}} viewport={{once: true}} className="text-2xl md:text-5xl font-gothic space-y-2">Now, time for a shoot</motion.h1>
        </motion.div>
      </div>
  )
}