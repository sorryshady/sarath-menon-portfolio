"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      const lenis = new Lenis({
        smoothTouch: true,
        eventsTarget: document.querySelector('body'),
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }, 3000)
  }, [])
  return <>{children}</>;
};

export default SmoothScroll;
