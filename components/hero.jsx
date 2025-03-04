"use client";

import { useState, useEffect } from "react";
import { Button } from "@components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I  build webapps like this.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-primary">Max Donner</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-muted-foreground h-8">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            I&apos;m a passionate web developer that loves creating beautiful,
            functional, and user-friendly websites and web-apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              aria-label="go to projects button"
              asChild
              size="lg"
              className="px-4 py-2"
            >
              <Link
                className="flex items-center justify-center group"
                href="#projects"
              >
                View My Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 md:group-hover:rotate-90" />
              </Link>
            </Button>
            <Button
              aria-label="download cv button"
              asChild
              variant="outline"
              size="lg"
            >
              <a href="/maxdonnercv.pdf" download className="button-test">
                <Download className="mr-2 h-4 w-4" />
                <span className="text-container">Download CV</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
