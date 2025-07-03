import ProjectCard from "../../../components/ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app/",
    image: "/project-1.png",
  },
  {
    name: "Blog Platform",
    description: "A modern blog platform with markdown support.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-platform.vercel.app/",
    image: "/project-2.png",
  },
  {
    name: "E-commerce Store",
    description: "A full-featured e-commerce store with Stripe integration.",
    stack: ["Next.js", "Stripe", "Prisma"],
    github: "https://github.com/yourusername/ecommerce-store",
    demo: "https://ecommerce-store.vercel.app/",
    image: "/project-3.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
} 