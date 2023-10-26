'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Sheet,
} from './ui/sheet';
import { useState } from 'react';
import { Project } from '@/types/Project';
import Link from 'next/link';
import { Github, Laptop2 } from 'lucide-react';

interface ProjectCardProps {
  data: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
  const { title, description, techs, repository, href, imageSrc } = data;

  const [showDetails, setShowDetails] = useState(!imageSrc);

  const handleMouseEnter = () => {
    if (imageSrc) {
      setShowDetails(true);
    }
  };

  const handleMouseLeave = () => {
    if (imageSrc) {
      setShowDetails(false);
    }
  };

  const backgroundImageStyle = () => {
    if (imageSrc)
      return {
        backgroundImage: `url(${imageSrc})`,
      };

    return {
      background:
        'radial-gradient(200px at 0px 0px, #0011ff3b, transparent 80%)',
    };
  };

  return (
    <>
      <Sheet>
        <div
          className={
            'group relative overflow-hidden flex items-end w-full min-h-[250px] rounded-[9px] border border-neutral-600 bg-cover bg-center hover:border-primary'
          }
          style={backgroundImageStyle()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {showDetails && (
              <>
                <SheetTrigger className="absolute z-50 w-full h-full" />
                <motion.div
                  className="backdrop-blur-md flex flex-col justify-end gap-2 w-full h-full px-4 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="text-sm text-foreground font-medium">
                    {description}
                  </p>
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
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <SheetContent className="w-full sm:w-[540px]">
          <SheetHeader>
            <SheetTitle className="font-bold text-2xl">{title}</SheetTitle>
            <SheetDescription className="text-base">
              {description}
            </SheetDescription>
          </SheetHeader>
          <div className="mt-7">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={title}
                className="border border-primary"
                style={{ width: '100%', height: 'auto' }}
                width={0}
                height={0}
                sizes="100vw"
              />
            )}
          </div>
          <SheetFooter className="mt-5">
            <div className="flex items-center gap-2">
              <Link
                href={repository}
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/50 focus:bg-gray-700/50"
              >
                <Github size={20} />
                Repositório
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
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
