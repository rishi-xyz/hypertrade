"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// @ts-ignore
import LiquidBackground from "threejs-components/build/backgrounds/liquid1.min.js";
import { useResponsive } from "../../hooks/use-responsive";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" as const },
  },
};

interface HeroAnimationsProps {
  children: React.ReactNode;
}

export const HeroAnimations = ({ children }: HeroAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isLargeScreen, shouldReduceMotion, shouldDisableEffects } = useResponsive();

  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  /* ---------------- GSAP EFFECTS ---------------- */
  useEffect(() => {
    // Skip GSAP animations on mobile for performance
    if (shouldReduceMotion) return;
    
    const ctx = gsap.context(() => {
      gsap.to(".sparkle-1", {
        y: -20,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".sparkle-2", {
        y: -15,
        x: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });

      gsap.to(".sparkle-3", {
        y: -25,
        x: 5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

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

  // Convert children to array and wrap with motion components
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

      <motion.div
        ref={containerRef}
        style={{ 
          // Only apply parallax effects on desktop
          ...(shouldDisableEffects ? {} : {
            y: parallaxY, 
            opacity: springOpacity, 
            scale: springScale
          })
        }}
        variants={stagger}
        initial={shouldReduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center w-full"
      >
        {/* Brand */}
        <motion.h2
          variants={shouldReduceMotion ? {} : scaleIn}
          className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center"
        >
          {childArray[0]}
        </motion.h2>

        {/* Badge */}
        <motion.div
          variants={shouldReduceMotion ? {} : {
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-sm font-medium text-primary mb-12 backdrop-blur-sm shadow-lg"
        >
          {childArray[1]}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={shouldReduceMotion ? {} : scaleIn}
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          {childArray[2]}
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={shouldReduceMotion ? {} : scaleIn}
          className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl mb-16 leading-relaxed"
        >
          {childArray[3]}
        </motion.p>

        {/* CTA */}
        <motion.div 
          variants={shouldReduceMotion ? {} : scaleIn}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {childArray[4]}
        </motion.div>
      </motion.div>
    </>
  );
};
