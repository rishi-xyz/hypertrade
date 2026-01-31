import { Badge } from "../ui/badge";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { HeroAnimations } from "./hero-animations";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradients - Server rendered */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.65_0.15_210/0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_100%,oklch(0.6_0.2_280/0.2)_0%,transparent_60%)]" />
      </div>

      {/* Client-side animations and interactive elements */}
      <HeroAnimations>
        {/* Brand */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center">
          <TrendingUp className="h-6 w-6 mr-3 text-primary" />
          <span className="font-extrabold tracking-wide text-primary">
            AutoTrade
          </span>
        </h2>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm shadow-lg">
          <Badge variant="outline" className="border-primary/30 text-primary">
            New
          </Badge>
          <span>V0.1 Beta is Live</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
          Next-Generation
          <br />
          <span className="text-primary">Trading Infrastructure</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl mb-16 leading-relaxed">
          Invest in proven strategies, build your own with AI, or automate
          custom workflows — all on one institutional-grade trading platform.
        </p>

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
      </HeroAnimations>
    </section>
  );
};
