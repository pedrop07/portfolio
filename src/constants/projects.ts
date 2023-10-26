import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    title: 'ChatHub',
    description:
      'O ChatHub é uma rede social de chats que permite aos usuários criar, participar e interagir em tempo real com uma variedade de chats temáticos.',
    techs: ['Next.js', 'React.js', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    repository: 'https://github.com/pedrop07/chathub-client',
  },
  {
    title: 'ChatHub - API',
    description:
      'Esta é a API utilizada pelo ChatHub. Ela cuida da autenticação dos usuários, permite a criação e exclusão de chats e permite a comunicação em tempo real fluindo por meio do WebSocket.',
    techs: ['Nest.js', 'TypeScript', 'TypeORM', 'MySQL', 'Passport.js'],
    repository: 'https://github.com/pedrop07/chathub-server',
  },
  {
    title: 'Desvende',
    description:
      'O Desvende é uma versão do popular jogo de navegador "Wordle", agora disponível em português brasileiro.',
    techs: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'SQLite',
    ],
    repository: 'https://github.com/pedrop07/desvende',
    href: 'https://desvende.vercel.app',
  },
  {
    title: 'Game Crud',
    description: 'Uma aplicação que simula uma locadora de jogos.',
    techs: [
      'React.js',
      'TypeScript',
      'Vite',
      'MUI',
      'Jest',
      'Testing Library',
      'Docker',
      'Express',
      'MySQL',
    ],
    repository: 'https://github.com/pedrop07/CRUD-Games',
  },
  {
    title: 'News Delivery',
    description: 'Um sistema de gerenciamento de notícias.',
    techs: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repository: 'https://github.com/pedrop07/NewsDelivery/tree/main/client',
  },
  {
    title: 'News Delivery - API',
    description:
      'Esta é a API utilizada pelo News Delivery, onde é possível criar, editar e excluir notícias.',
    techs: ['Laravel', 'Docker', 'PostgreSQL'],
    repository: 'https://github.com/pedrop07/NewsDelivery/tree/main/server',
  },
  {
    title: 'Coffee Delivery',
    description:
      'Desafio da trilha de React do curso Ignite da Rocketseat. Uma aplicação web de delivery de cafés.',
    techs: ['React.js', 'TypeScript', 'Vite', 'Redux', 'Tailwind CSS'],
    repository: 'https://github.com/pedrop07/React-JS--coffee-delivery',
    href: 'https://coffee-delivery-fawn.vercel.app',
  },
  {
    title: 'Quick Draw',
    description:
      'Um site interativo que permite a criação de arte pixelizada com facilidade..',
    techs: ['JavaScript', 'HTML', 'CSS'],
    repository: 'https://github.com/pedrop07/QuickDraw',
    href: 'https://pedrop07.github.io/QuickDraw/',
  },
  {
    title: 'To do list',
    description: 'Um site para criar e gerenciar tarefas.',
    techs: ['JavaScript', 'HTML', 'CSS'],
    repository: 'https://github.com/pedrop07/todoList',
    href: 'https://pedrop07.github.io/todoList/',
  },
];
