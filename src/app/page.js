'use client'
import React from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Floating from "./components/Floating";
import Lenis from "lenis";
import ZoomParallax from "./components/ZoomParallax";
import About from "./components/About";
import Parallax from "./components/Parallax";
import Suggestion from "./components/Suggestion";
import Details from "./components/Details";


export default function Home() {
  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}, []);
  return (
    <main className="hero ">
      <Hero />
      <Floating />
      <Details />
      <ZoomParallax />
      <About />
      <Parallax />
      
    </main>
  );
}
