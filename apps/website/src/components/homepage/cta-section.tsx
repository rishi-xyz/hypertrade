"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Zap, Star, Rocket, TrendingUp, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" as const }
  },
};

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based animations
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.95, 1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.9, 1]);

  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background elements
      gsap.to('.cta-bg-1', {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to('.cta-bg-2', {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      // Floating animation for decorative elements
      gsap.to('.cta-sparkle-1', {
        y: -20,
        rotation: 180,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to('.cta-sparkle-2', {
        y: -15,
        rotation: -180,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1
      });

      gsap.to('.cta-sparkle-3', {
        y: -25,
        rotation: 360,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2
      });

      // Pulse effect for CTA button
      gsap.to('.cta-pulse', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Glow effect animation
      gsap.to('.cta-glow', {
        opacity: "0.3, 0.6, 0.3",
        scale: "1, 1.1, 1",
        duration: 5,
        repeat: -1,
        ease: "power1.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden border-t border-border/20 bg-linear-to-b from-background via-background/95 to-background/90"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="cta-bg-1 absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,oklch(0.65_0.15_210/0.08)_0%,transparent_70%)]" />
        <div className="cta-bg-2 absolute inset-0 bg-[radial-gradient(25%_25%_at_80%_20%,oklch(0.6_0.2_280/0.05)_0%,transparent_60%)]" />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.04) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(255, 119, 198, 0.04) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(120, 219, 255, 0.04) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.04) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="cta-sparkle-1 absolute top-20 left-10 text-primary/30"
          whileHover={{ scale: 1.2 }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="cta-sparkle-2 absolute top-40 right-20 text-primary/20"
          whileHover={{ scale: 1.2 }}
        >
          <Star className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="cta-sparkle-3 absolute bottom-40 left-20 text-primary/25"
          whileHover={{ scale: 1.2 }}
        >
          <Zap className="w-7 h-7" />
        </motion.div>
      </div>

      <div ref={containerRef} className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          style={{
            y: springY,
            scale: springScale,
            opacity: springOpacity
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Main heading with gradient text */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent mb-8 leading-tight"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="block bg-linear-to-r from-primary via-primary/60 to-primary bg-size-[200%_100%] bg-clip-text text-transparent"
            >
              Build, invest, and automate
            </motion.span>
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="block bg-linear-to-r from-foreground via-foreground/80 to-foreground bg-size-[200%_100%] bg-clip-text text-transparent"
            >
              faster than ever
            </motion.span>
          </motion.h2>

          {/* Description with enhanced styling */}
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-4xl text-muted-foreground/80 text-xl md:text-2xl leading-relaxed mb-16"
          >
            Join professional traders and funds using AutoTrade to power next‑gen trading strategies with enterprise‑grade infrastructure.
          </motion.p>

          {/* CTA Buttons with enhanced effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Glow effect behind primary button */}
            <div className="relative">
              <div className="cta-glow absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || ""}>
                  <Button
                    size="lg"
                    className="cta-pulse relative rounded-full px-12 h-16 bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-2xl hover:shadow-primary/25 text-lg font-semibold transition-all duration-300 group border-2 border-primary/20"
                  >
                    <span className="flex items-center gap-3">
                      <Rocket className="w-5 h-5" />
                      Get Started Now
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="group-hover:x-2"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Secondary button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || ""}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-12 h-16 bg-background/60 hover:bg-background/80 backdrop-blur-sm border-2 hover:border-primary/50 text-lg font-semibold transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5" />
                    View Demo
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};