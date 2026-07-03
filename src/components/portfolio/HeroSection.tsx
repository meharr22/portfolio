import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop";

export default function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      
      {/* 🔥 FIXED PARALLAX BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        
        {/* Decorative element */}
        <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in">
          <div className="h-px w-16 bg-accent" />
          <div className="mx-4 w-2 h-2 rounded-full bg-accent" />
          <div className="h-px w-16 bg-accent" />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
          Mehar Arora
        </h1>

<p className="text-lg md:text-xl text-muted-foreground font-light tracking-zen mb-8 opacity-0 animate-fade-in-up animation-delay-200">
  Electronics & Computer Engineering Student · AI/ML Enthusiast
</p>

<p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
  Building intelligent systems,working with data and developing secure and scalable AI driven solutions.
</p>



        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-600">
          <ContactLink icon={<MapPin className="w-4 h-4" />} text="Karnal,Haryana" />
          <ContactLink icon={<Phone className="w-4 h-4" />} text="+91 93064 70727" />
          <ContactLink
            icon={<Mail className="w-4 h-4" />}
            text="Email"
            href="mailto:mehararora47@gmail.com"
          />
          <ContactLink
            icon={<Linkedin className="w-4 h-4" />}
            text="LinkedIn"
            href="https://www.linkedin.com/in/mehar-arora-mmmm/"
          />
          <ContactLink
            icon={<Github className="w-4 h-4" />}
            text="GitHub"
            href="https://github.com/meharr22"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-muted-foreground/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
      {icon}
      {text}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}