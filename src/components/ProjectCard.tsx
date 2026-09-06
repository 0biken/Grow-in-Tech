import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, category, description, result, image, link }: ProjectCardProps) => {
  return (
    <Link to={link} className="glass-card overflow-hidden flex flex-col group block h-full">
      <div className="aspect-video bg-git-surface-2 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow items-start">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full text-git-accent bg-git-accent-soft">
          {category}
        </span>
        <h3 className="font-heading text-lg font-bold text-git-title mb-2">
          {title}
        </h3>
        <p className="text-sm text-git-muted line-clamp-2 mb-4 flex-grow">
          {description}
        </p>
        <p className="text-sm font-semibold text-git-accent mt-auto">
          {result}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
