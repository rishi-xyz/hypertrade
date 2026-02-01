"use client";

import { Badge } from "../ui/badge";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { HeroAnimations } from "./hero-animations";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand logo animation
      gsap.fromTo('.brand-logo', 
        { rotate: 0, scale: 1 },
        { 
          rotate: 360,
          duration: 8,
          repeat: -1,
          ease: "linear"
        }
      );

      // Brand logo scale animation
      gsap.to('.brand-logo', {
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Brand logo hover effect
      const brandLogo = document.querySelector('.brand-logo');
      if (brandLogo) {
        brandLogo.addEventListener('mouseenter', () => {
          gsap.to('.brand-logo', { scale: 1.15, rotate: 15, duration: 0.2 });
        });
        brandLogo.addEventListener('mouseleave', () => {
          gsap.to('.brand-logo', { scale: 1, rotate: 0, duration: 0.2 });
        });
      }

      // Brand text animation
      gsap.to('.brand-text', {
        backgroundPosition: "0% 50%, 100% 50%, 0% 50%",
        duration: 3,
        repeat: -1,
        ease: "linear"
      });

      // Badge animations
      gsap.to('.hero-badge', {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.2)",
        duration: 2,
        repeat: -1,
        ease: "easeInOut"
      });

      gsap.to('.badge-inner', {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "easeInOut"
      });

      // Heading gradient animation
      gsap.to('.heading-gradient', {
        backgroundPosition: "0% 50%, 100% 50%, 0% 50%",
        duration: 4,
        repeat: -1,
        ease: "linear"
      });

      // CTA button shimmer effects
      gsap.to('.shimmer-primary', {
        x: "-100%, 200%",
        duration: 2,
        repeat: -1,
        ease: "linear"
      });

      gsap.to('.shimmer-secondary', {
        x: "-100%, 200%",
        duration: 2.5,
        repeat: -1,
        ease: "linear"
      });

      // Initial animations
      const tl = gsap.timeline();
      tl.fromTo('.brand-logo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" })
        .fromTo('.brand-text', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .fromTo('.heading-gradient', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
        .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }, "-=0.4")
        .fromTo('.cta-container', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }, "-=0.4");

      // CTA button hover effects
      const ctaButtons = document.querySelectorAll('.cta-button');
      ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
        button.addEventListener('mousedown', () => {
          gsap.to(button, { scale: 0.98, duration: 0.1, ease: "power2.out" });
        });
        button.addEventListener('mouseup', () => {
          gsap.to(button, { scale: 1.05, duration: 0.1, ease: "power2.out" });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradients - Server rendered */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.65_0.15_210/0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_100%,oklch(0.6_0.2_280/0.2)_0%,transparent_60%)]" />
      </div>

      {/* Client-side animations and interactive elements */}
      <HeroAnimations>
        {/* Brand */}
        <div className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center">
          <div
            className="brand-logo h-8 w-8 md:h-10 md:w-10 mr-3 rounded-2xl bg-linear-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-xl cursor-pointer"
          >
            <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </div>
          <span 
            className="brand-text font-extrabold tracking-wide bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
          >
            AutoTrade
          </span>
        </div>

        {/* Badge */}
        <div 
          className="hero-badge inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm shadow-lg"
        >
          <div className="badge-inner">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
              New
            </Badge>
          </div>
          <span>V0.1 Beta is Live</span>
        </div>

        {/* Heading */}
        <h1 ref={headingRef} className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          <span className="block bg-linear-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Next-Generation
          </span>
          <span 
            className="heading-gradient block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
          >
            Trading Infrastructure
          </span>
        </h1>

        {/* Description */}
        <p ref={descriptionRef} className="hero-description mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl mb-16 leading-relaxed">
          Invest in proven strategies, build your own with AI, or automate
          <br className="hidden sm:block" />
          custom workflows — all on one institutional-grade trading platform.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="cta-container flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <div className="cta-button">
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || "#"}>
              <Button
                size="lg"
                className="relative rounded-full px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-semibold w-full sm:w-auto overflow-hidden group bg-linear-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20"
              >
                <div className="shimmer-primary absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              </Button>
            </Link>
          </div>

          <div className="cta-button">
            <Link href={process.env.NEXT_PUBLIC_PLATFORM_LINK || "#"}>
              <Button
                size="lg"
                variant="outline"
                className="relative rounded-full px-8 sm:px-12 h-14 sm:h-16 text-base sm:text-lg font-semibold w-full sm:w-auto overflow-hidden group bg-linear-to-r from-background via-background/50 to-background border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="shimmer-secondary absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -skew-x-12" />
                <span className="relative z-10 flex items-center">
                  <Play className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </HeroAnimations>
    </section>
  );
};
