"use client";
import React, { useEffect } from "react";
import SmoothScroll from './utils/SmoothScroll'
import Parallax from "./components/Parallax/Parallax";
import Landing from "./components/Landing/Landing";
import Filmography from "./components/Filmography/Filmography";
import Timeline from './components/Timeline/Timeline'
import Poetry from './components/Poetry/Poetry'
import PhotoLanding from './components/PhotoLanding/PhotoLanding/PhotoLanding'
import Carousel from './components/Carousel/Carousel'
const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])
  return (
    <>
      <div id='modal'></div>
      <main>
        {/* <SmoothScroll /> */}
        <Landing />
        <Timeline />
        <Parallax />
        <Carousel />
        <PhotoLanding />
        <Filmography />
        <Poetry />
      </main>
    </>
  )
}

export default Home;
