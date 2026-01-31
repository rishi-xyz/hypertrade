"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    ArrowRight,
    Twitter,
    Linkedin,
    Github,
} from "lucide-react";
import { useResponsive } from "../hooks/use-responsive";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    },
};

const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "backOut" as const }
    },
};

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { shouldReduceMotion, shouldDisableParallax } = useResponsive();
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end start"]
    });

    // Scroll-based animations - only on desktop
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -20]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.9, 1]);

    const springY = useSpring(y, { stiffness: 300, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

    useEffect(() => {
        // Skip GSAP animations on mobile for performance
        if (shouldReduceMotion) return;
        
        const ctx = gsap.context(() => {
            // Parallax effect for background elements
            if (!shouldDisableParallax) {
                gsap.to('.footer-bg-1', {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    }
                });
            }

            // Floating animation for decorative elements
            gsap.to('.footer-sparkle-1', {
                y: -10,
                rotation: 90,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            gsap.to('.footer-sparkle-2', {
                y: -8,
                rotation: -90,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 0.5
            });

            // Subtle glow effect
            gsap.to('.footer-glow', {
                opacity: "0.2, 0.4, 0.2",
                duration: 6,
                repeat: -1,
                ease: "power1.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, [shouldReduceMotion, shouldDisableParallax]);

    const footerSections = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Dashboard", href: "#dashboard" },
                { name: "Analytics", href: "#analytics" },
                { name: "API", href: "#api" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#about" },
                { name: "Blog", href: "#blog" },
                { name: "Careers", href: "#careers" },
                { name: "Press", href: "#press" }
            ]
        },
    ];

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Github, href: "#", label: "GitHub" }
    ];

    return (
        <footer
            ref={footerRef}
            className="relative border-t border-border/20 bg-linear-to-b from-background via-background/95 to-background/90 overflow-hidden"
        >

            <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <motion.div
                    style={{
                        // Only apply scroll effects on desktop
                        ...(shouldDisableParallax ? {} : {
                            y: springY,
                            opacity: springOpacity
                        })
                    }}
                    variants={containerVariants}
                    initial={shouldReduceMotion ? "show" : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-16"
                >

                    {/* Newsletter section */}
                    <motion.div
                        variants={shouldReduceMotion ? {} : scaleInVariants}
                        className="bg-background/40 backdrop-blur-sm rounded-2xl p-8 border border-border/30"
                    >
                        <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
                        <p className="text-muted-foreground/70 text-sm mb-6">
                            Get the latest updates and trading insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-background/60 border border-border/30 focus:border-primary/50 focus:outline-none transition-all duration-200 text-sm"
                            />
                            <motion.button
                                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Bottom section */}
                    <div className="border-t border-border/20 pt-8 mb-12">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                            {/* Copyright */}
                            <motion.div
                                variants={shouldReduceMotion ? {} : itemVariants}
                                className="text-muted-foreground/60 text-sm"
                            >
                                © 2026 AutoTrade Inc. All rights reserved.
                            </motion.div>

                            {/* Social links */}
                            <motion.div
                                variants={shouldReduceMotion ? {} : itemVariants}
                                className="flex items-center gap-6"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={social.label}
                                        whileHover={shouldReduceMotion ? {} : {
                                            scale: 1.1,
                                            y: -2,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <Link
                                            href={social.href}
                                            aria-label={social.label}
                                            className="text-muted-foreground/50 hover:text-primary transition-colors duration-200"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Additional links */}
                            <motion.div
                                variants={shouldReduceMotion ? {} : itemVariants}
                                className="flex items-center gap-6 text-sm"
                            >
                                <div
                                    className="text-muted-foreground/50 hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                                >
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    Status
                                </div>
                                <Link
                                    href="#contact"
                                    className="text-muted-foreground/50 hover:text-foreground transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};