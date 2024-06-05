'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

function Menu({ isOpen, setIsOpen }) {

    const data = [
        {
            name: 'Home',
            link: 'home'
        },
        {
            name: 'Services',
            link: 'services'
        },
        {
            name: 'Portfolio',
            link: 'portfolio'
        },
        {
            name: 'About',
            link: 'about'
        },
    ];

    const variants = {
        open: {
            width: 310,
            height: '450px',
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: [0.65, 0, 0.35, 1]
            }
        },
        closed: {
            width: 100,
            height: 40,
            opacity: 0,
            transition: {
                duration: 0.75,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.75
            }
        }
    };

    const handleLinkClick = (link) => {
        setIsOpen(false); // Close the menu after clicking a link
        if (link === 'services') {
            animateScroll.scrollTo(1000);
        }
        if (link === 'portfolio') {
            animateScroll.scrollTo(1900);
        }
        if (link === 'about') {
            animateScroll.scrollTo(4900);
        }
    };

    return (
        <motion.div variants={variants} initial='closed' animate={isOpen ? 'open' : 'closed'} className='menu w-[480px] h-[650px] bg-black-100 rounded-xl flex justify-between flex-col'>
            <AnimatePresence>
                {isOpen && (
                    <div className='link flex justify-start items-start h-full flex-col p-[20px] text-4xl no-underline'>
                        {data.map((item, i) => (
                            <motion.div key={i} custom={i} variants={variants} initial='initial' animate='enter' exit='exit'>
                                <ScrollLink
                                    to={item.link}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => handleLinkClick(item.link)}
                                    className='cursor-pointer '
                                >
                                    {item.name}
                                </ScrollLink>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Menu;
