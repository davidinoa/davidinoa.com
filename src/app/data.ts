import audiophileImage from '@/images/portfolio/audiophile.png'
import dictionaryImage from '@/images/portfolio/dictionary.png'
import kanbanImage from '@/images/portfolio/kanban.png'
import passwordGeneratorImage from '@/images/portfolio/password-generator.png'
import pomodoroImage from '@/images/portfolio/pomodoro.png'
import reactWordleImage from '@/images/portfolio/react-wordle.png'

export const projects = [
  {
    name: 'Pomodoro',
    image: pomodoroImage,
    demoUrl: 'https://pomodoro-di.vercel.app/',
    codeUrl: 'https://github.com/davidinoa/pomodoro-app',
  },
  {
    name: 'Kanban',
    image: kanbanImage,
    demoUrl: 'https://kanban-dil.vercel.app/',
    codeUrl: 'https://github.com/davidinoa/kanban-app',
  },
  {
    name: 'Audiophile',
    image: audiophileImage,
    demoUrl: 'https://audiophile-di.vercel.app/',
    codeUrl: 'https://github.com/davidinoa/audiophile',
  },
  {
    name: 'Secure Password Generator',
    image: passwordGeneratorImage,
    demoUrl: 'https://password-generator.davidinoa.com/',
    codeUrl: 'https://github.com/davidinoa/password-generator',
  },
  {
    name: 'React Wordle',
    image: reactWordleImage,
    demoUrl: 'https://react-wordle-di.vercel.app/',
    codeUrl: 'https://github.com/davidinoa/react-wordle',
  },
  {
    name: 'Dictionary',
    image: dictionaryImage,
    demoUrl: 'https://dictionary-di.vercel.app/',
    codeUrl: 'https://github.com/davidinoa/dictionary-web-app',
  },
] as const
