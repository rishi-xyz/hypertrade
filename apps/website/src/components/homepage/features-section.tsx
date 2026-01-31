"use client";

import { features } from "@/src/lib/features";
import { motion, useInView } from "framer-motion";
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
}) => (
  <motion.div
    className="absolute inset-0 flex items-center justify-center"
    animate={shouldReduceMotion ? {} : {
      opacity: isActive ? 1 : 0,
      scale: isActive ? 1 : 0.96,
    }}
    transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <div className="relative w-full h-full p-8">
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transition-opacity duration-600 ${isActive ? 'opacity-100' : 'opacity-0'
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
  </motion.div>
);

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
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) setActiveFeature(index);
  }, [inView, index, setActiveFeature]);

  return (
    <div ref={ref} className="min-h-[70vh] flex items-center py-12">
      <div className={`max-w-6xl w-full transition-all duration-700 ease-out ${inView ? "opacity-100" : "opacity-40"}`}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="uppercase text-muted-foreground/70 text-sm font-semibold tracking-wider">
                {feature.heading}
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
              {feature.title}
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
              {feature.desc}
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 lg:max-w-md">
            <motion.div
              className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }}
              animate={shouldReduceMotion ? {} : { 
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.95, 
                y: inView ? 0 : 20 
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transition-opacity duration-600 ${
                inView ? 'opacity-100' : 'opacity-0'
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Section ---------------- */

export const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-b from-background via-background/50 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_70%_30%,oklch(0.6_0.15_210/0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_30%_70%,oklch(0.65_0.1_280/0.02)_0%,transparent_50%)]" />
      </div>

      {/* Section header */}
      <div className="text-center mb-24 px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
          A Complete Trading Platform
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground/80 text-xl md:text-2xl leading-relaxed">
          From idea to execution — everything you need to deploy profitable strategies at scale.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6">
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
