import React from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 bg-transparent">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <ScrollFadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle title="Profile" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
  Electronics and Computer Engineering student at{" "}
  <span className="text-foreground font-medium">
    Thapar Institute of Engineering & Technology
  </span>{" "}
  (2023–2027) with a strong academic record (CGPA: 9.55).
  Skilled in AI/ML,embedded systems and software development,
  with hands-on experience in EEG based analysis, cloud systems,
  and computer vision applications. Passionate about building
  intelligent, secure, and scalable real-world solutions.
</p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="h-px flex-1 max-w-[60px] bg-border" />
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-zen">
        {title}
      </h2>
      <div className="h-px flex-1 max-w-[60px] bg-border" />
    </div>
  );
}