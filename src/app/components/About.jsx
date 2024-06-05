import React from 'react'
import Word from './Word'

function About() {

   
    const paragraph1 = 'As a photographer, I have the privilege of capturing moments that transcend time and space. With my lens as my paintbrush and the world as my canvas, I embark on a journey to immortalize the beauty that surrounds us.'
    const paragraph2 = 'My passion lies in landscape and headshot photography, where I blend technical skill with artistic vision to create images that resonate with depth and emotion. Whether it\'s the serene majesty of a mountain range or the nuanced expression in a portrait, I strive to evoke a sense of wonder and connection in every frame.'
    const paragraph3 = 'For me, photography is more than just a profession—it\'s a calling. It\'s about freezing moments in time, preserving memories, and sharing stories that resonate with the soul. With each click of the shutter, I invite you to join me on a visual odyssey, where every image is a chapter in the narrative of life.'
    const paragraph4 = 'Let\'s embark on this journey together, where my photographs become windows to the world and reflections of the human experience. Together, we\'ll capture memories, create art, and celebrate the beauty of existence.'
        return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='mt-[150px]'>
            <h1 className='font-gothic text-[22px] sm:text-[32px]  md:text-[70px] xl:text-[100px] ml-6 text-center'>
                Introducing <br/><i>  myself</i> 
            </h1>
        </div>
        <div className='w-full flex flex-col-reverse justify-center items-center md:flex-row mt-[100px] '>
            <div className='w-[50%] md:border-r-2 border-black'>
                <div className=''>
                <p className='font-gothic text-[22px] sm:text-[32px] md:text-[60px] ml-6 py-2'>
                    I am Jared and <br /> I&apos;m a <br />photographer from the heart
                </p>
                </div>
                <div>
                    <p className='font-gothic text-[18px] sm:text-[22px] md:text-[22px] ml-6 my-8'>
                       I LOVE MOMENTS, I LOVE CAPTURING, I LOVE PHOTOGRAPHY
                    </p>
                </div>
                <div className='font-gothic text-[18px] sm:text-[22px] md:text-[22px]  '>
                    <div className='my-2'>
                        <Word paragraph={paragraph1} name='paragraph1'/>
                    </div>
                    <div className='my-2'>
                        <Word paragraph={paragraph2} name='paragraph2'/>
                            </div>
                    <div>
                        <Word paragraph={paragraph3} name='paragraph3'/>
                    </div>
                    <div className='my-2'>

                        <Word paragraph={paragraph4} name='paragraph4'/>
                    </div>
                </div>
            </div>
            <div className='w-[50%] flex justify-center items-center'> 
            
            <div>
                <img src='/try.png' alt='Jared Gillespie' className='w-[400px]' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default About