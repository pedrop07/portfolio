'use client';

import { Header } from '@/components/header';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, x: 5 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.4 }}
        className="px-5 lg:px-16 max-w-7xl mx-auto md:flex gap-10"
      >
        <Header />
        <main className="w-full my-12 lg:my-24 space-y-16">
          <About />
          <Projects />
        </main>
      </motion.div>
    </>
  );
}
