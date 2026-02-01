"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    Twitter,
    Linkedin,
    Github,
} from "lucide-react";
import { useResponsive } from "../hooks/use-responsive";

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { shouldReduceMotion, shouldDisableParallax } = useResponsive();

    useEffect(() => {
        if (!footerRef.current) return;

        const ctx = gsap.context(() => {
            // Scroll-based animations
            if (!shouldDisableParallax) {
                const scrollTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });

                scrollTl
                    .to('.footer-container', { y: 30, duration: 0.3 })
                    .to('.footer-container', { y: 0, duration: 0.3 })
                    .to('.footer-container', { scale: 0.98, duration: 0.2 })
                    .to('.footer-container', { scale: 1.01, duration: 0.2 })
                    .to('.footer-container', { scale: 1, duration: 0.1 });
            }

            // Parallax effects for background elements
            gsap.to('.footer-bg-1', {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });

            gsap.to('.footer-bg-2', {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 3
                }
            });

            // Floating animation for decorative elements
            gsap.to('.footer-float-1', {
                y: -15,
                rotation: 180,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            gsap.to('.footer-float-2', {
                y: -10,
                rotation: -180,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1
            });

            gsap.to('.footer-float-3', {
                y: -20,
                rotation: 360,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 2
            });

            // Social links hover effects
            const socialLinks = footerRef.current?.querySelectorAll('.social-link');
            socialLinks?.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, { 
                        scale: 1.1, 
                        y: -3,
                        rotation: 5,
                        duration: 0.2 
                    });
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(link, { 
                        scale: 1, 
                        y: 0,
                        rotation: 0,
                        duration: 0.2 
                    });
                });
            });

            // CTA button hover effect
            const ctaButton = footerRef.current?.querySelector('.footer-cta');
            if (ctaButton) {
                ctaButton.addEventListener('mouseenter', () => {
                    gsap.to(ctaButton, { 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                        duration: 0.2 
                    });
                });
                ctaButton.addEventListener('mouseleave', () => {
                    gsap.to(ctaButton, { 
                        scale: 1, 
                        y: 0,
                        duration: 0.2 
                    });
                });
            }

            // Initial animations
            const tl = gsap.timeline();
            tl.fromTo('.footer-brand', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
              .fromTo('.footer-links', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: "power2.out" }, "-=0.4")
              .fromTo('.footer-cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }, "-=0.4")
              .fromTo('.footer-social', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }, "-=0.4")
              .fromTo('.footer-bottom', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }, "-=0.4");

        }, footerRef);

        return () => ctx.revert();
    }, [shouldDisableParallax]);

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
            {/* Background elements for GSAP animations */}
            <div className="absolute inset-0 -z-10">
                <div className="footer-bg-1 absolute inset-0 bg-[radial-gradient(30%_30%_at_50%_50%,oklch(0.65_0.12_210/0.04)_0%,transparent_70%)]" />
            </div>

            {/* Floating decorative elements for GSAP animations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="footer-sparkle-1 absolute top-10 left-10 text-primary/15">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
                <div className="footer-sparkle-2 absolute top-20 right-20 text-primary/10">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                </div>
                <div className="footer-glow absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            </div>

            <div ref={containerRef} className="footer-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="space-y-12 sm:space-y-16">

                    {/* Newsletter section */}
                    <div className="footer-cta bg-background/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/30">
                        <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-center sm:text-left">Stay Updated</h3>
                        <p className="text-muted-foreground/70 text-sm mb-4 sm:mb-6 text-center sm:text-left">
                            Get the latest updates and trading insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-background/60 border border-border/30 focus:border-primary/50 focus:outline-none transition-all duration-200 text-sm"
                            />
                            <button className="footer-cta px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2">
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="border-t border-border/20 pt-6 sm:pt-8 mb-8 sm:mb-12">
                        <div className="flex flex-col gap-6 sm:gap-8">
                            {/* Copyright and Social Links */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
                                <div className="footer-brand text-muted-foreground/60 text-sm text-center sm:text-left">
                                    © 2026 AutoTrade Inc. All rights reserved.
                                </div>

                                {/* Social links */}
                                <div className="footer-social flex items-center gap-4 sm:gap-6">
                                    {socialLinks.map((social) => (
                                        <div key={social.label} className="social-link cursor-pointer">
                                            <Link
                                                href={social.href}
                                                aria-label={social.label}
                                                className="text-muted-foreground/50 hover:text-primary transition-colors duration-200"
                                            >
                                                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional links */}
                            <div className="footer-bottom flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};