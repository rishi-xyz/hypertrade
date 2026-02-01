"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import LiquidBackground from "threejs-components/build/backgrounds/liquid1.min.js";
import { useResponsive } from "../../hooks/use-responsive";

interface HeroAnimationsProps {
  children: React.ReactNode;
}

export const HeroAnimations = ({ children }: HeroAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isLargeScreen, shouldReduceMotion, shouldDisableEffects } = useResponsive();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Skip GSAP animations on mobile for performance
      if (shouldReduceMotion) return;
      
      // Sparkle animations
      gsap.to(".sparkle-1", {
        y: -20,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(".sparkle-2", {
        y: -15,
        x: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5
      });

      gsap.to(".sparkle-3", {
        y: -25,
        x: 5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1
      });

      // Scroll-based parallax effects
      if (!shouldDisableEffects && containerRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });

        scrollTl
          .to(containerRef.current, { y: -100, duration: 0.3 })
          .to(containerRef.current, { y: 0, duration: 0.3 })
          .to(containerRef.current, { scale: 0.8, duration: 0.2 })
          .to(containerRef.current, { scale: 1, duration: 0.2 })
          .to(containerRef.current, { opacity: 0, duration: 0.1 })
          .to(containerRef.current, { opacity: 1, duration: 0.1 });
      }

      // Initial staggered animations for children
      const children = containerRef.current?.querySelectorAll('.hero-child');
      if (children && children.length > 0) {
        const tl = gsap.timeline();
        children.forEach((child, index) => {
          tl.fromTo(child, 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
            index * 0.2
          );
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion, shouldDisableEffects]);

  /* ---------------- LIQUID BACKGROUND ---------------- */
  useEffect(() => {
    // Only initialize liquid background on large screens (desktop)
    if (!isLargeScreen || !canvasRef.current) return;

    const liquid = LiquidBackground(canvasRef.current);

    liquid.loadImage("/bg-white.png");
    liquid.liquidPlane.material.metalness = 0.75;
    liquid.liquidPlane.material.roughness = 0.25;
    liquid.liquidPlane.uniforms.displacementScale.value = 5;
    liquid.setRain(false);

    return () => {
      liquid?.dispose?.();
    };
  }, [isLargeScreen]);

  // Convert children to array and wrap with classes for GSAP targeting
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <>
      {/* Three.js Canvas - Only on large screens (desktop) */}
      {isLargeScreen && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-20 w-full h-full"
        />
      )}

      {/* Floating sparkle elements for GSAP animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sparkle-1 absolute top-20 left-10 text-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
        <div className="sparkle-2 absolute top-40 right-20 text-primary/15">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
        <div className="sparkle-3 absolute bottom-40 left-20 text-primary/25">
          <div className="w-2.5 h-2.5 bg-primary rounded-full" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="hero-child mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center w-full"
      >
        {/* Wrap each child with hero-child class for GSAP targeting */}
        {childArray.map((child, index) => (
          <div key={index} className="hero-child">
            {child}
          </div>
        ))}
      </div>
    </>
  );
};
