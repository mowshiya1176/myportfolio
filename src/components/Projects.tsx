import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import admiImg from "../assets/admi-ass.png";
import portfolioImg from "../assets/portfolio.png";
import brandpulseImg from "../assets/brandpulse.png";
import ttdryImg from "../assets/tt-dry.png";
import velouraImg from "../assets/veloura-cafe.png";
import sheskillImg from "../assets/sheskill.png";

const Projects = () => {
  const projects = [
    {
    title: "SheSkill – Small Skills, Daily Income Platform",
    description: "SheSkill is a platform created to support women who cannot start large businesses but want to earn a small daily income using their skills. The platform connects women with simple work opportunities such as stitching clothes, handmade products, and small home-based services. Even completing a small task like stitching one dress a day can help them earn a steady income. SheSkill focuses on empowering women, promoting self-reliance, and creating financial independence through small but meaningful work opportunities.",
    image: sheskillImg,
    technologies: ["React","TypeScript","Tailwind CSS","Vite","shadcn/ui","Supabase"],
    liveUrl: "https://sheskill.vercel.app/"
},
    {
    title: "BrandPulse – AI-Powered LinkedIn Growth Platform",
    description: "BrandPulse is a modern SaaS platform designed to help developers and creators turn their coding journey into LinkedIn influence. Users can connect GitHub, LeetCode, and HackerRank to automatically generate AI-crafted LinkedIn posts from their daily learning and commits. The platform focuses on personal branding, automation, and growth through consistent content creation with a sleek and conversion-focused UI.",
    image: brandpulseImg,
    technologies: ["React","TypeScript","Tailwind CSS","Vite","shadcn/ui","Open AI","Supabase"],
    liveUrl: "https://brand-builder-ai-27.vercel.app/"
},
    {
      title: "TT Dry Cleaning – Professional Service Website-Internship",
      description: "A clean and modern website designed and developed for TT Dry Cleaning. This project focuses on showcasing garment care services, pricing, pickup & delivery options, customer benefits, and a responsive layout optimized for usability and conversions. Built with attention to detail to highlight trust and professionalism in laundry & dry cleaning services.",
      image: ttdryImg,
      technologies: ["React","Typescript", "Tailwind CSS","Backend-emailjs"],
      liveUrl: "https://tt-dry-cleaning-30ej28ne9-mowshis-projects.vercel.app/"
},
    {
      title: "AI Admission Assistant",
      description: "An AI admission assistant helps students with college admission queries, eligibility, courses, fees, and application steps—anytime, automatically.",
      image: admiImg,
      technologies: ["React", "supabase", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      liveUrl: "https://addmission-assistant.vercel.app/",
      githubUrl: "https://github.com/mowshiya1176/addmission-assistant"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
      image: portfolioImg,
      technologies: ["React", "TypeScript","Node.js", "TailwindCSS"],
      liveUrl: "https://myportfolio-jlp5.vercel.app/",
      githubUrl: "https://github.com/mowshiya1176/myportfolio"
    },
    {
    title: "Veloura Cafe – UI/UX Design",
    description: "A modern and elegant cafe website design created in Figma, focusing on a premium coffee brand experience. Includes landing page, menu section, featured drinks, and contact layout with a warm, aesthetic visual style.",
    image: velouraImg,
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    liveUrl: "https://www.figma.com/site/hsJfXZsxkW7hNawU70L6uF/Veloura-cafe?node-id=0-1&t=hu8zCsdfPlmefH7l-1",
}

  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion 
            for creating innovative web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border hover:border-purple-500/50 smooth-transition hover:scale-105 overflow-hidden group glow-effect"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;