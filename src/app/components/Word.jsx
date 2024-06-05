'use client'
import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';




function Paragraph({ paragraph = '', name = '' }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 0.45"]
  });

  const words = (paragraph).split(" ");
  

  React.useEffect(() => {
    console.log(words)
    
  }, []);

  return (
    
    <p className='font-gothic text-[18px] sm:text-[22px] md:text-[22px] ml-6' ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                
        ;
      })}
    </p>
    
    
    
  );

      

}


const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="mr-2  " style={{display: 'inline-block'}}>
     
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
      
    </span>
  );
};

export default Paragraph;
