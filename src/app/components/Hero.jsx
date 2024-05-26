'use client'
import React, { useState, useEffect } from 'react'
import Floating from './Floating';
import { motion } from 'framer-motion'

function Hero() {
    const imageTextPairs = [
        {
            image: 'Beach_Head.jpg',
            text: 'I am Jared Gillespie'
        },
        {
            image: 'Stormy_Hills.jpg',
            text: 'a professional photographer'
        },
        {
            image: 'image3.jpg',
            text: 'based in Melbourne'
        },
        {
            image: 'IMG_5662.jpg',
            text: 'I specialize in landscapes and portrait'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageTextPairs.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [imageTextPairs.length]);

    return (
        <div className="slideshow-container absolute mt-[100px] top-0 left-0 w-full h-full flex justify-center items-center">
            
         
            
        <motion.div style={{position:'absolute'}}  initial={{opacity:0, y:70}} transition={{duration: 2, delay: 4.5, type:'tween', damping:'150px'}} animate={{opacity:1, y: 0}}className="slideshow relative"> 
            {imageTextPairs.map((image, index) => (
                <div key={index} className={`slide absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src={image.image}
                        alt={`Slide ${index + 1}`}
                        className="absolute inset-0 object-cover object-center transition-opacity duration-1000 opacity-100"
                    />
                    <div className={` header image-text absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <p className='font-gothic text-[40px] text-center text-balance'>{image.text}</p>
                    </div>
                   
                </div>
                   
            ))}
         
        </motion.div>
        
    </div>
    
    
    );
}

export default Hero;
