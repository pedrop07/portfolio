'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { contacts } from '@/constants/contacts';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20, x: 5 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.4 }}
      className="md:sticky md:top-0 h-full w-full pt-12 lg:pt-24"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold">Pedro Parente</h1>

      <h2>Desenvolvedor Web</h2>

      <p className="mt-4 text-muted-foreground max-w-xs">
        Desenvolvedor web com experiência na criação de aplicações web
        acessíveis de alto desempenho.
      </p>

      <ul
        aria-label="Link para contato"
        className="flex flex-col space-y-3 w-max mt-5 md:mt-10"
      >
        {contacts.map((contact) => {
          return (
            <li key={contact.name}>
              <Link
                href={contact.href}
                target="_blank"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/50 focus:bg-gray-700/50"
              >
                <contact.icon size={20} />
                {contact.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.header>
  );
}
