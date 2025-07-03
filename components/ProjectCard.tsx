interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image?: string;
}

export default function ProjectCard({ name, description, stack, github, demo, image }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col">
      {image && (
        <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-4" />
      )}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="mb-3 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {stack.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-3">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
      </div>
    </div>
  );
} 