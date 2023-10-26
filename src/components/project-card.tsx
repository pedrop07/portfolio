'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/Project';
import Link from 'next/link';
import { Github, Laptop2 } from 'lucide-react';

interface ProjectCardProps {
  data: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  const { title, description, techs, repository, href } = data;

  return (
    <div
      className={'w-full min-h-[250px] rounded-[9px] border border-neutral-700'}
    >
      <motion.div
        className="flex flex-col gap-2 justify-between w-full h-full px-5 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-sm text-foreground font-medium">{description}</p>
        </div>
        <div className="space-y-2">
          <ul
            className="flex items-center flex-wrap gap-2"
            aria-label="Tecnologias utilizadas no projeto"
          >
            {techs.map((tech) => {
              return (
                <li key={tech}>
                  <div className="px-3 py-1 rounded-full bg-primary/25 text-primary font-bold text-xs">
                    {tech}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href={repository}
              target="_blank"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/50 focus:bg-gray-700/50"
            >
              <Github size={20} />
              GitHub
            </Link>
            {href && (
              <Link
                href={href}
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/50 focus:bg-gray-700/50"
              >
                <Laptop2 size={20} />
                Site
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
