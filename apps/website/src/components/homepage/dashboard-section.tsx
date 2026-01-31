"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Monitor, TrendingUp, BarChart3, Activity, Zap, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 60 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "backOut" as const }
  },
};

export const DashboardSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based animations
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.9, 1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.9, 1]);
  
  const springY = useSpring(y, { stiffness: 400, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 500, damping: 25 });
  const springOpacity = useSpring(opacity, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax effect for background elements
      gsap.to('.dashboard-bg-1', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      gsap.to('.dashboard-bg-2', {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5
        }
      });

      // Gentle floating animation for feature icons
      gsap.to('.feature-icon-1', {
        y: -8,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to('.feature-icon-2', {
        y: -6,
        rotation: -1,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.7
      });

      gsap.to('.feature-icon-3', {
        y: -10,
        rotation: 3,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.4
      });

      // Dashboard image entrance animation
      gsap.fromTo('.dashboard-image', 
        {
          y: 120,
          scale: 0.85,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          }
        }
      );

      // Subtle glow effect animation
      gsap.to('.dashboard-glow', {
        opacity: "0.2, 0.4, 0.2",
        scale: "1, 1.05, 1",
        duration: 6,
        repeat: -1,
        ease: "power1.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-linear-to-b from-background via-background/95 to-background/90"
    >
      {/* Minimal animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="dashboard-bg-1 absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,oklch(0.65_0.12_210/0.06)_0%,transparent_70%)]" />
        <div className="dashboard-bg-2 absolute inset-0 bg-[radial-gradient(25%_25%_at_80%_20%,oklch(0.6_0.15_280/0.04)_0%,transparent_60%)]" />
        <motion.div 
          animate={{
            background: [
              "radial-gradient(circle at 40% 60%, rgba(120, 119, 198, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 40%, rgba(255, 119, 198, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(120, 219, 255, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(120, 119, 198, 0.03) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent mb-6"
          >
            Powerful Dashboard Analytics
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="mx-auto max-w-3xl text-muted-foreground/80 text-xl md:text-2xl leading-relaxed"
          >
            Monitor your trading performance with real-time insights, advanced charts, and comprehensive analytics designed for serious traders.
          </motion.p>
        </motion.div>

        {/* Minimal feature icons floating around dashboard */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="feature-icon-1 absolute top-24 left-12 bg-primary/8 backdrop-blur-sm rounded-full p-3 border border-primary/15"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-5 h-5 text-primary/80" />
          </motion.div>
          <motion.div 
            className="feature-icon-2 absolute top-32 right-16 bg-primary/8 backdrop-blur-sm rounded-full p-3 border border-primary/15"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 className="w-5 h-5 text-primary/80" />
          </motion.div>
          <motion.div 
            className="feature-icon-3 absolute bottom-32 left-16 bg-primary/8 backdrop-blur-sm rounded-full p-3 border border-primary/15"
            whileHover={{ scale: 1.05 }}
          >
            <Activity className="w-5 h-5 text-primary/80" />
          </motion.div>
        </div>

        {/* Dashboard image with refined scroll animation */}
        <motion.div 
          ref={dashboardRef}
          style={{ 
            y: springY, 
            scale: springScale, 
            opacity: springOpacity 
          }}
          className="relative mb-12"
        >
          <motion.div
            variants={scaleInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Refined glow effect behind dashboard */}
            <div className="dashboard-glow absolute inset-0 bg-primary/15 blur-2xl rounded-2xl" />
            
            {/* Dashboard image container */}
            <div className="dashboard-image relative bg-background/90 backdrop-blur-sm rounded-2xl border border-border/40 shadow-xl overflow-hidden">
              <Image 
                src="/dashboard.png" 
                alt="Trading Dashboard" 
                width={1200} 
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Minimal floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: "backOut" }}
              className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg"
            >
              <Zap className="inline w-3 h-3 mr-1" />
              Real-time
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, ease: "backOut" }}
              className="absolute -bottom-3 -left-3 bg-background border border-border/60 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm"
            >
              <Monitor className="inline w-3 h-3 mr-1" />
              Live View
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Refined feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: TrendingUp,
              title: "Real-time Analytics",
              description: "Track performance metrics and market trends as they happen."
            },
            {
              icon: BarChart3,
              title: "Advanced Charts",
              description: "Professional-grade charts with customizable indicators."
            },
            {
              icon: Activity,
              title: "Live Monitoring",
              description: "Watch your trades execute with millisecond precision."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -3, 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              className="bg-background/70 backdrop-blur-sm rounded-xl p-6 border border-border/30 shadow-lg hover:shadow-xl hover:border-border/50 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Refined CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || ""}>
              <Button 
                size="lg" 
                className="rounded-full px-8 h-14 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/20 text-base font-medium transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Explore Dashboard
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="group-hover:x-1"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};