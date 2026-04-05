import { SectionTitle } from "./AboutSection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import {
  Briefcase,
  Award,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

const AI_IMG = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop";
const CODE_IMG = "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop";

interface Project {
  title: string;
  tech: string;
  points: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Mind-Wandering vs Focused Detection",
    tech: "Python, OpenCV, Pandas, MATLAB, EEGLAB, NumPy",
    points: [
      "Classified user attention states using EEG data and probe timestamps.",
      "Built a pipeline for EEG preprocessing, feature extraction, and temporal labeling.",
    ],
    image: AI_IMG,
  },
  {
    title: "Secure Cloud Vault",
    tech: "Python, Flask, AWS S3, Boto3, HTML",
    points: [
      "Developed a cloud-based file management system with secure upload, download, and versioning.",
      "Implemented authentication and session-based access control.",
    ],
    image: CODE_IMG,
  },
  {
    title: "Movie Booking System",
    tech: "C++, Data Structures",
    points: [
      "Developed a console-based application to manage movie ticket bookings.",
      "Enabled users to view available shows, select seats, and generate booking details.",
    ],
    image: CODE_IMG,
  },
  {
    title: "AI Gesture-Controlled Virtual Whiteboard",
    tech: "Python, OpenCV, MediaPipe, NumPy",
    points: [
      "Developed a computer vision-based virtual whiteboard for real-time drawing.",
      "Used hand gestures via webcam eliminating need for physical input devices.",
    ],
    image: AI_IMG,
  },
  {
    title: "Smart Book Recommendation System",
    tech: "Python, Scikit-learn, Streamlit",
    points: [
      "Engineered a hybrid recommendation engine using textual similarity and user ratings.",
      "Delivered personalized book suggestions through an interactive app.",
    ],
    image: AI_IMG,
  },
  {
    title: "ATM Management System",
    tech: "C++, Data Structures",
    points: [
      "Developed a console-based ATM system for banking operations.",
      "Included balance inquiry, cash withdrawal, deposit, and transaction history.",
    ],
    image: CODE_IMG,
  },
  {
    title: "Fake News Detection System",
    tech: "Python, Scikit-learn, Streamlit",
    points: [
      "Built and deployed an NLP-based model using TF-IDF and ML algorithms.",
      "Classified news articles as real or fake using machine learning.",
    ],
    image: AI_IMG,
  },
];

export default function ProjectsSection() {
  return (
    <>
      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <SectionTitle title="Projects" />
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollFadeIn key={index} delay={index * 120}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group h-full">
                  {project.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-serif font-bold text-foreground text-base mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent font-medium mb-3">
                      {project.tech}
                    </p>
                    <ul className="space-y-1.5">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <SectionTitle title="Experience" />
          </ScrollFadeIn>

          {/* AI Intern */}
          <ScrollFadeIn delay={150}>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-serif font-bold text-lg">AI Intern</h3>
                    <span className="text-xs text-accent">June 2025 – July 2025</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    Experiential Learning Centre, TIET
                  </p>

                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span>•</span>
                      <span>Worked on EEG-based mind-wandering detection.</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span>•</span>
                      <span>Built CNN-LSTM model using TensorFlow & Keras.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Virtual Intern */}
          <ScrollFadeIn delay={250}>
            <div className="bg-card border border-border rounded-lg p-6 mt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-serif font-bold text-lg">Virtual Intern</h3>
                    <span className="text-xs text-accent">June 2025 – August 2025</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    Cisco Networking Academy – Cybersecurity Program
                  </p>

                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span>•</span>
                      <span>Completed cybersecurity internship with labs.</span>
                    </li>
                    <li className="text-sm text-muted-foreground flex gap-2">
                      <span>•</span>
                      <span>Learned network security & ethical hacking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollFadeIn>
            <SectionTitle title="Achievements" />
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="font-serif font-bold text-lg">Achievements</h3>
              </div>

              <ul className="space-y-3">
  <li className="text-sm text-muted-foreground flex gap-2">
    <span className="text-accent mt-0.5 shrink-0">•</span>
    <span>
      Ranked 1st in branch during first year; awarded a merit-based scholarship and cash prize.
    </span>
  </li>

  <li className="text-sm text-muted-foreground flex gap-2">
    <span className="text-accent mt-0.5 shrink-0">•</span>
    <span>
      Completed Deloitte and Accenture Technology Job Simulations (Forage), gaining experience in software development, problem-solving, and dashboard design.
    </span>
  </li>

  <li className="text-sm text-muted-foreground flex gap-2">
    <span className="text-accent mt-0.5 shrink-0">•</span>
    <span>
      Completed Cisco Cybersecurity certifications (Junior Cybersecurity Analyst, Introduction to Cybersecurity), covering network security, threat detection, and risk management.
    </span>
  </li>

  <li className="text-sm text-muted-foreground flex gap-2">
    <span className="text-accent mt-0.5 shrink-0">•</span>
    <span>
      Received the Best Paper Award for “EEG-Based Mind Wandering Detection using Deep Learning”.
    </span>
  </li>

  <li className="text-sm text-muted-foreground flex gap-2">
    <span className="text-accent mt-0.5 shrink-0">•</span>
    <span>
      Earned the AWS Academy Graduate – Cloud Foundations certification by Amazon Web Services (AWS).
    </span>
  </li>
</ul>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <ScrollFadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
  <a
    href="mailto:mehararora47@gmail.com"
    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
  >
    <Mail className="w-4 h-4" />
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/mehar-arora-mmmm/"
    target="_blank"
    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
  >
    <Linkedin className="w-4 h-4" />
    LinkedIn
  </a>

  <a
    href="https://github.com/meharr22"
    target="_blank"
    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
  >
    <Github className="w-4 h-4" />
    GitHub
  </a>

  <span className="flex items-center gap-2 text-sm text-muted-foreground">
    <Phone className="w-4 h-4" />
    +91 93064 70727
  </span>

  <span className="flex items-center gap-2 text-sm text-muted-foreground">
    <MapPin className="w-4 h-4" />
    Karnal, Haryana
  </span>
</div>

            <p className="text-xs mt-6">
              © 2026 Mehar Arora
            </p>
          </div>
        </ScrollFadeIn>
      </footer>
    </>
  );
}