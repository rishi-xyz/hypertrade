"use client";

import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../hooks/use-responsive";

export const Navbar = () => {
    const navbarRef = useRef<HTMLElement>(null);
    const { shouldReduceMotion, shouldDisableEffects } = useResponsive();
    const { scrollY } = useScroll();
    
    // Transform navbar background and shadow based on scroll - only on desktop
    const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["blur(12px)", "blur(20px)"]);
    const shadow = useTransform(scrollY, [0, 50], ["0 1px 3px rgba(0, 0, 0, 0.1)", "0 4px 20px rgba(0, 0, 0, 0.1)"]);
    const borderColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.1)"]);

    useEffect(() => {
        // Skip GSAP animations on mobile for performance
        if (shouldReduceMotion) return;
        
        const ctx = gsap.context(() => {
            // Subtle parallax effect for logo icon
            gsap.to('.navbar-logo-icon', {
                y: -2,
                rotation: 5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            // Glow effect for logo
            gsap.to('.navbar-logo-glow', {
                opacity: "0.3, 0.6, 0.3",
                scale: "1, 1.05, 1",
                duration: 4,
                repeat: -1,
                ease: "power1.inOut"
            });

        }, navbarRef);

        return () => ctx.revert();
    }, [shouldReduceMotion]);

    return (
        <motion.header 
            ref={navbarRef}
            style={{ 
                // Only apply scroll effects on desktop
                ...(shouldDisableEffects ? {} : {
                    backgroundColor,
                    backdropFilter: backdropBlur,
                    boxShadow: shadow,
                    borderColor
                })
            }}
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-sm ${
                shouldDisableEffects ? 'bg-white/95' : ''
            }`}
        >
            <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6 lg:px-8">
                <motion.div 
                    className="flex items-center gap-3"
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div 
                        className="navbar-logo-glow relative h-9 w-9 rounded-xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg"
                        whileHover={shouldReduceMotion ? {} : { 
                            scale: 1.1, 
                            rotate: 10,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    >
                        <motion.div 
                            className="navbar-logo-icon"
                            animate={shouldReduceMotion ? {} : { rotate: [0, 5, 0] }}
                            transition={{ 
                                duration: shouldReduceMotion ? 0 : 4, 
                                repeat: shouldReduceMotion ? 0 : Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <TrendingUp className="h-5 w-5 text-primary-foreground" />
                        </motion.div>
                    </motion.div>
                    <motion.span 
                        className="text-lg font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                        whileHover={shouldReduceMotion ? {} : { 
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            transition: { duration: 2, ease: "linear" }
                        }}
                        style={{ backgroundSize: "200% 100%" }}
                    >
                        AutoTrade
                    </motion.span>
                </motion.div>
                <motion.div 
                    className="flex items-center gap-3"
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        transition={{ type: "spring", stiffness: shouldReduceMotion ? 0 : 400, damping: 25 }}
                    >
                        <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || ""}>
                            <Button 
                                size="lg" 
                                className="relative rounded-full px-6 shadow-lg overflow-hidden group bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border border-primary/20"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    animate={shouldReduceMotion ? {} : { x: ["-100%", "200%"] }}
                                    transition={{ duration: shouldReduceMotion ? 0 : 2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "linear" }}
                                />
                                <span className="relative z-10 font-medium">Platform</span>
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    );
};