"use client";

import { features } from "@/src/lib/features";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "../../hooks/use-responsive";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Animations ---------------- */

const FeatureImageItem = ({
  feature,
  isActive,
  shouldReduceMotion,
}: {
  feature: typeof features[0];
  isActive: boolean;
  shouldReduceMotion: boolean;
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    
    gsap.to(imageRef.current, {
      opacity: isActive ? 1 : 0,
      scale: isActive ? 1 : 0.96,
      duration: shouldReduceMotion ? 0 : 0.6,
      ease: "power2.out"
    });
  }, [isActive, shouldReduceMotion]);

  return (
    <div ref={imageRef} className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full p-8">
        {/* Glow effect */}
        <div className={`feature-glow absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transition-opacity duration-600 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className="relative bg-linear-to-br from-background/90 to-background/70 backdrop-blur-md rounded-3xl border border-border/30 shadow-2xl p-8 h-full flex items-center justify-center">
          <Image
            src={feature.image}
            alt={feature.title}
            width={500}
            height={350}
            className="rounded-2xl object-contain shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

/* ---------------- Text Item ---------------- */

const FeatureTextItem = ({
  feature,
  index,
  setActiveFeature,
  isActive,
}: {
  feature: typeof features[0];
  index: number;
  setActiveFeature: (i: number) => void;
  isActive: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useResponsive();

  useEffect(() => {
    if (!ref.current) return;

    // Create ScrollTrigger for view detection
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => setActiveFeature(index),
      onEnterBack: () => setActiveFeature(index),
    });

    // Animate based on scroll position
    const animation = gsap.to(ref.current, {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out"
    });

    // Initial state
    gsap.set(ref.current, { opacity: 0.4 });

    return () => {
      trigger.kill();
      animation.kill();
    };
  }, [index, setActiveFeature]);

  useEffect(() => {
    if (!ref.current) return;

    // Animate icon
    const icon = ref.current.querySelector('.feature-icon');
    if (icon) {
      gsap.to(icon, {
        scale: 1.1,
        rotate: 5,
        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
        duration: 0.2,
        ease: "power2.out"
      });

      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.1, rotate: 5, duration: 0.2 });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotate: 0, duration: 0.2 });
      });
    }

    // Animate heading
    const heading = ref.current.querySelector('.feature-heading');
    if (heading) {
      gsap.fromTo(heading, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Animate description
    const description = ref.current.querySelector('.feature-description');
    if (description) {
      gsap.fromTo(description,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: "power2.out" }
      );
    }

    // Animate image container
    const imageContainer = ref.current.querySelector('.feature-image-container');
    if (imageContainer) {
      gsap.fromTo(imageContainer,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

  }, [shouldReduceMotion]);

  return (
    <div ref={ref} className="min-h-[60vh] sm:min-h-[70vh] flex items-center py-8 sm:py-12">
      <div className="max-w-6xl w-full transition-all duration-700 ease-out">
        <div className="flex flex-col gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="w-full text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-4 sm:mb-6">
              <div className="feature-icon h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10 shadow-lg cursor-pointer">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <span className="feature-label uppercase text-muted-foreground/80 text-sm sm:text-base font-semibold tracking-wider">
                {feature.heading}
              </span>
            </div>

            <h3 className="feature-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4 sm:mb-6">
              <span className="bg-linear-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                {feature.title}
              </span>
            </h3>

            <p className="feature-description text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
              {feature.desc}
            </p>
          </div>

          {/* Image */}
          <div className="w-full sm:max-w-md lg:max-w-lg">
            <div className="feature-image-container relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden">
              {/* Glow effect */}
              <div className="feature-image-glow absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transition-opacity duration-600 opacity-0" />
              
              <div className="relative bg-linear-to-br from-background/90 to-background/70 backdrop-blur-md rounded-3xl border border-border/30 shadow-2xl p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center cursor-pointer">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={280}
                  className="rounded-2xl object-contain shadow-lg w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Section ---------------- */

export const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header animations
      const header = sectionRef.current?.querySelector('.features-header');
      if (header) {
        gsap.fromTo(header, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }

      const heading = sectionRef.current?.querySelector('.features-heading');
      if (heading) {
        gsap.fromTo(heading,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
        );
      }

      // Animate gradient text
      const gradientText = sectionRef.current?.querySelector('.gradient-text');
      if (gradientText) {
        gsap.to(gradientText, {
          backgroundPosition: "0% 50%, 100% 50%, 0% 50%",
          duration: 4,
          repeat: -1,
          ease: "linear"
        });
      }

      // Animate feature icons
      const featureIcons = sectionRef.current?.querySelectorAll('.feature-icon');
      featureIcons?.forEach((icon, index) => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
          delay: index * 0.2
        });
      });

      // Animate feature labels
      const featureLabels = sectionRef.current?.querySelectorAll('.feature-label');
      featureLabels?.forEach((label) => {
        gsap.to(label, {
          opacity: 1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut"
        });
        
        // Set initial state
        gsap.set(label, { opacity: 0.7 });
      });

      // Animate image glows
      const imageGlows = sectionRef.current?.querySelectorAll('.feature-image-glow');
      imageGlows?.forEach((glow) => {
        gsap.to(glow, {
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.2), 0 0 50px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
          duration: 3,
          repeat: -1,
          ease: "easeInOut"
        });
      });

      // Image hover effects
      const imageContainers = sectionRef.current?.querySelectorAll('.feature-image-container');
      imageContainers?.forEach((container) => {
        container.addEventListener('mouseenter', () => {
          gsap.to(container, {
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            duration: 0.3,
            ease: "easeOut"
          });
        });
        container.addEventListener('mouseleave', () => {
          gsap.to(container, {
            scale: 1,
            boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
            duration: 0.3,
            ease: "easeOut"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-linear-to-b from-background via-background/50 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_70%_30%,oklch(0.6_0.15_210/0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_30%_70%,oklch(0.65_0.1_280/0.02)_0%,transparent_50%)]" />
      </div>

      {/* Section header */}
      <div className="features-header text-center mb-16 sm:mb-24 px-4 sm:px-6">
        <h2 className="features-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
          <span className="block bg-linear-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-2">
            A Complete
          </span>
          <span 
            className="gradient-text block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
          >
            Trading Platform
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          From idea to execution — everything you need to deploy profitable strategies at scale.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {features.map((f, i) => (
          <FeatureTextItem
            key={i}
            feature={f}
            index={i}
            setActiveFeature={setActiveFeature}
            isActive={i === activeFeature}
          />
        ))}
      </div>
    </section>
  );
};
