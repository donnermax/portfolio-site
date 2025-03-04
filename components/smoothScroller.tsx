// components/SmoothScroller.tsx
"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollerProps {
  children: React.ReactNode;
}
// test

const SmoothScroller: React.FC<SmoothScrollerProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      // Optional: handle scroll events here.
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup (if needed) when component unmounts.
    return () => {
      // Lenis doesn't provide a built-in kill, but if it did, you'd call it here.
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroller;
