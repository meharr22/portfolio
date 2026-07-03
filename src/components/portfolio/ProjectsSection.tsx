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

const AI_IMG = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop";
const CODE_IMG = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop";

interface Project {
  title: string;
  tech: string;
  points: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Adaptive AI Interview Coach",
    tech: "Python • FastAPI • React.js • Gemini API • RAG • Sentence Transformers • ChromaDB • SQLite",
    points: [
      "Built an AI-powered interview preparation platform using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG).",
      "Implemented resume parsing, semantic search, skill-gap analysis, AI answer evaluation, and personalized learning roadmap generation.",
      "Developed RESTful APIs with FastAPI, integrated a React frontend, and managed vector embeddings using ChromaDB.",
    ],
    image: AI_IMG,
  },

  {
    title: "EEG-Based Mind Wandering Detection",
    tech: "Python • TensorFlow • Keras • MATLAB • EEGLAB • NumPy • Deep Learning",
    points: [
      "Developed a deep learning pipeline to classify Mind Wandering and Focused Attention using multichannel EEG signals.",
      "Performed EEG preprocessing, ICA artifact removal, feature extraction, channel selection, and spectrogram generation.",
      "Trained and evaluated CNN-LSTM models to improve cognitive state prediction through optimized feature engineering.",
    ],
    image: AI_IMG,
  },

  {
    title: "LLM-Based Home Robot",
    tech: "Python • LLMs • NLP • Prompt Engineering • Agentic AI",
    points: [
      "Developed an autonomous home robot capable of understanding and executing natural language instructions.",
      "Implemented intelligent task planning, object manipulation, navigation, and safety-aware reasoning using LLMs.",
      "Designed a modular architecture supporting multi-step reasoning and scalable robotic workflows.",
    ],
    image: AI_IMG,
  },

  {
    title: "LiDAR-Based Mapless Navigation",
    tech: "Python • Reinforcement Learning • LiDAR • ROS2 • Computer Vision",
    points: [
      "Built a mapless autonomous navigation system for real-time obstacle avoidance using LiDAR sensor data.",
      "Implemented perception and path-planning algorithms for autonomous navigation without prior maps.",
      "Optimized decision-making for robust navigation in dynamic and unknown environments.",
    ],
    image: AI_IMG,
  },

  {
    title: "Secure Cloud Vault",
    tech: "Python • Flask • AWS S3 • Boto3 • SQLite • HTML/CSS",
    points: [
      "Developed a secure cloud-based file storage system with authentication and role-based access.",
      "Implemented encrypted file upload, download, version control, and AWS S3 integration.",
      "Built REST APIs for secure file management with scalable cloud storage.",
    ],
    image: CODE_IMG,
  },

  {
    title: "AI Gesture-Controlled Virtual Whiteboard",
    tech: "Python • OpenCV • MediaPipe • NumPy • Computer Vision",
    points: [
      "Developed a real-time virtual whiteboard using hand gesture recognition.",
      "Implemented finger tracking and gesture detection using OpenCV and MediaPipe.",
      "Enabled touchless drawing and interaction through computer vision techniques.",
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

    {/* Research Intern */}
    <ScrollFadeIn delay={150}>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            <Briefcase className="w-6 h-6" />
          </div>

          <div className="w-full">
            <div className="flex justify-between mb-2">
              <h3 className="font-serif font-bold text-lg">
                Research Intern
              </h3>
              <span className="text-xs text-accent">Ongoing</span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Experiential Learning Centre, TIET
            </p>

            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span>
                  Developing an AR-based Scuba Diving Training System using
                  Unity and Augmented Reality technologies.
                </span>
              </li>

              <li className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span>
                  Building immersive 3D environments, interactive simulations,
                  and user interaction modules for realistic training.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollFadeIn>

    {/* AI Intern */}
    <ScrollFadeIn delay={250}>
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            <Briefcase className="w-6 h-6" />
          </div>

          <div className="w-full">
            <div className="flex justify-between mb-2">
              <h3 className="font-serif font-bold text-lg">
                AI Intern
              </h3>
              <span className="text-xs text-accent">
                June 2025 – July 2025
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Experiential Learning Centre, TIET
            </p>

            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span>
                  Developed a CNN-LSTM model for EEG-based Mind Wandering
                  Detection using TensorFlow and Keras.
                </span>
              </li>

              <li className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span>
                  Performed EEG preprocessing, spectrogram generation, feature
                  extraction, and model evaluation for cognitive state
                  classification.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  </div>
</section>
{/* Achievements & Certifications */}
<section id="achievements" className="py-24 px-6">
  <div className="max-w-3xl mx-auto">
    <ScrollFadeIn>
      <SectionTitle title="Achievements & Certifications" />
    </ScrollFadeIn>

    <ScrollFadeIn delay={100}>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-5 h-5 text-accent" />
          <h3 className="font-serif font-bold text-lg">
            Achievements & Certifications
          </h3>
        </div>

        <ul className="space-y-3">

          <li className="text-sm text-muted-foreground flex gap-2">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span>
              Ranked <strong>1st</strong> in the Electronics & Computer Engineering branch based on first-year academic performance; awarded a <strong>Merit Scholarship</strong> and <strong>Cash Prize</strong>. Continued receiving Merit Scholarships in subsequent semesters based on academic excellence and CGPA.
            </span>
          </li>

          <li className="text-sm text-muted-foreground flex gap-2">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span>
              Received the <strong>Best Paper Award</strong> for the research project <em>"EEG-Based Mind Wandering Detection using Deep Learning."</em>
            </span>
          </li>

          <li className="text-sm text-muted-foreground flex gap-2">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span>
              Certified in <strong>AWS Academy Graduate – Cloud Foundations</strong>, <strong>Introduction to Modern AI (Cisco Networking Academy)</strong>, <strong>Artificial Intelligence Fundamentals (IBM SkillsBuild)</strong>, and <strong>Dynamic Programming Camp (AlgoUniversity)</strong>.
            </span>
          </li>

          <li className="text-sm text-muted-foreground flex gap-2">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span>
              Completed <strong>Technology Job Simulations</strong> by <strong>Deloitte Australia</strong> and <strong>Accenture</strong> (Forage), gaining hands-on experience in software engineering and problem solving.
            </span>
          </li>

        </ul>
      </div>
    </ScrollFadeIn>
  </div>
</section>