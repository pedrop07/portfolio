import { projects } from '@/constants/projects';
import { ProjectCard } from '../project-card';

export function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Projetos</h2>

      <div className="grid xl:grid-cols-2 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.title} data={project} />;
        })}
      </div>
    </section>
  );
}
