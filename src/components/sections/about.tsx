'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import { stack } from '@/constants/stack';

export function About() {
  const arrowRightPlayerRef = useRef<Player>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Sobre mim</h2>

      <div className="space-y-3 mb-6">
        <p>
          Meu nome é Pedro Parente, sou desenvolvedor web com 2 anos de
          experiência.
        </p>

        <p>
          Minha prioridade é entregar soluções de alta qualidade dentro dos
          prazos estabelecidos, buscando a satisfação dos clientes e o sucesso
          dos projetos.
        </p>

        <p>
          Além disso, busco manter-me sempre atualizado com as tecnologias e
          padrões de projeto mais utilizados no mercado, com o objetivo de
          constantemente aprimorar o desempenho e a manutenibilidade dos
          projetos nos quais trabalho.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-bold">Stack</h3>
        </div>

        <ul
          className="flex flex-wrap gap-4"
          aria-label="Tecnologias nas quais tenho experiência"
        >
          {stack.map(({ name, src }, index) => {
            return (
              <li key={name}>
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 100 + index * 40,
                    filter: 'grayscale(100%)',
                  }}
                  animate={{ opacity: 1, y: 0, filter: 'grayscale(100%)' }}
                  whileHover={{ scale: 1.15, filter: 'grayscale(0)' }}
                  transition={{
                    duration: 1,
                    scale: { type: 'spring', stiffness: 400 },
                    filter: { duration: 0.25 },
                  }}
                  alt={name}
                  title={name}
                  src={src}
                  width={30}
                  height={30}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
        onMouseEnter={() => arrowRightPlayerRef.current?.play()}
        onMouseLeave={() => arrowRightPlayerRef.current?.stop()}
        href={'/curriculo.pdf'}
      >
        Ver currículo completo
        <Player
          src="/lottie/arrow-right.json"
          style={{ height: 20, width: 20 }}
          ref={arrowRightPlayerRef}
        />
      </Link>
    </section>
  );
}
