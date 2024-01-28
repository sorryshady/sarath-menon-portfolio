"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // setTimeout(() => {
    //   window.scrollTo(0, 0)
    // }, 2500)
    setTimeout(() => {
      const lenis = new Lenis({
        smoothTouch: true,
        eventsTarget: document.querySelector("main"),
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }, 3000);
  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
