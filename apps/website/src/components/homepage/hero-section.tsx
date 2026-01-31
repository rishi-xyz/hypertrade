"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Badge } from "../ui/badge";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// @ts-ignore
import LiquidBackground from "threejs-components/build/backgrounds/liquid1.min.js";

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

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  /* ---------------- GSAP EFFECTS ---------------- */
  useEffect(() => {
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
  }, []);

  /* ---------------- LIQUID BACKGROUND ---------------- */
  useEffect(() => {
    if (!canvasRef.current) return;

    const liquid = LiquidBackground(canvasRef.current);

    liquid.loadImage("/bg-white.png");
    liquid.liquidPlane.material.metalness = 0.75;
    liquid.liquidPlane.material.roughness = 0.25;
    liquid.liquidPlane.uniforms.displacementScale.value = 5;
    liquid.setRain(false);

    return () => {
      liquid?.dispose?.();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-20 w-full h-full"
      />

      {/* Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.65_0.15_210/0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_100%,oklch(0.6_0.2_280/0.2)_0%,transparent_60%)]" />
      </div>

      <motion.div
        style={{ y: parallaxY, opacity: springOpacity, scale: springScale }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center w-full"
      >
        {/* Brand */}
        <motion.h2
          variants={scaleIn}
          className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center"
        >
          <TrendingUp className="h-6 w-6 mr-3 text-primary" />
          <span className="font-extrabold tracking-wide text-primary">
            AutoTrade
          </span>
        </motion.h2>

        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-sm font-medium text-primary mb-12 backdrop-blur-sm shadow-lg"
        >
          <Badge variant="outline" className="border-primary/30 text-primary">
            New
          </Badge>
          <span>V0.1 Beta is Live</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          ref={titleRef}
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          Next-Generation
          <br />
          <span className="text-primary">Trading Infrastructure</span>
        </motion.h1>

        {/* Description */}
        <motion.p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl mb-16 leading-relaxed">
          Invest in proven strategies, build your own with AI, or automate
          custom workflows — all on one institutional-grade trading platform.
        </motion.p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || "#"}>
            <Button
              size="lg"
              className="rounded-full px-10 h-16 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>

          <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || "#"}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-16 text-lg font-semibold"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
