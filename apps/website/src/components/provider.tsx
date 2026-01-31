'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initialize ScrollSmoother with enhanced settings
    const smoother = ScrollSmoother.create({
      smooth: -0.4,
      effects: true,
      smoothTouch: 0.1,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      ignoreMobileResize: true,
    });

    smoother.effects("img",{speed : "auto"});

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      lenis.destroy();
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div id="smooth-wrapper">
        {children}
    </div>
  );
}