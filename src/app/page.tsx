import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import blackrockLogo from '@/images/resume/blackrock.jpeg'
import inspiratoLogo from '@/images/resume/inspirato.jpeg'
import yieldxLogo from '@/images/resume/yieldx.jpeg'
import geniusPlazaLogo from '@/images/resume/genius-plaza.webp'
import dollarShaveClubLogo from '@/images/resume/dollar-shave-club.png'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import pomodoroImage from '@/images/portfolio/pomodoro.png'
import passwordGeneratorImage from '@/images/portfolio/password-generator.png'
import reactWordleImage from '@/images/portfolio/react-wordle.png'
import dictionaryImage from '@/images/portfolio/dictionary.png'
import travisAvatar from '@/images/avatars/travis-tillman.jpeg'
import wyattAvatar from '@/images/avatars/wyatt-thompson.jpeg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src'] | string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {typeof role.logo === 'string' ? (
          <span className="text-2xl">{role.logo}</span>
        ) : (
          <Image
            src={role.logo}
            alt=""
            className="h-7 w-7 rounded-full"
            unoptimized
          />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Inspirato',
      title: 'UI Engineer',
      logo: inspiratoLogo,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'BlackRock',
      title: 'Application Engineer',
      logo: blackrockLogo,
      start: '2021',
      end: '2021',
    },
    {
      company: 'YieldX',
      title: 'Frontend Engineer',
      logo: yieldxLogo,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Genius Plaza',
      title: 'Frontend Developer',
      logo: geniusPlazaLogo,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Dollar Shave Club',
      title: 'Frontend Engineer Intern',
      logo: dollarShaveClubLogo,
      start: '2018',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/david-inoa.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
        download="David Inoa.pdf"
      >
        Download resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Carousel() {
  const projects = [
    {
      name: 'Pomodoro',
      image: pomodoroImage,
      url: 'https://pomodoro-di.vercel.app/',
    },
    {
      name: 'Secure Password Generator',
      image: passwordGeneratorImage,
      url: 'https://password-generator-di.vercel.app/',
    },
    {
      name: 'React Wordle',
      image: reactWordleImage,
      url: 'https://react-wordle-di.vercel.app/',
    },
    {
      name: 'Dictionary',
      image: dictionaryImage,
      url: 'https://dictionary-di.vercel.app/',
    },
  ]

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2']

  const externalLinkIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0-7 7"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div className="mt-4 sm:mt-8">
      <div className="my-4 flex gap-5 py-8 sm:gap-8">
        {projects.map(({ image, url, name }, imageIndex) => (
          <a
            key={image.src}
            href={url}
            target="_blank"
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt={name}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid place-items-center rounded-xl border-2 border-teal-500 bg-black p-2 text-center text-xl font-bold uppercase text-white opacity-0 transition-opacity duration-500 hover:opacity-90 sm:rounded-2xl">
              <span className="flex flex-col items-center">
                {name}
                {externalLinkIcon}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <article>
      <Container className="mt-16">
        <h2 className="text-3xl font-bold">Recent work</h2>
      </Container>
      <div className="max-w-screen grid place-items-center overflow-auto">
        <Carousel />
      </div>
    </article>
  )
}

function Testimonials() {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-100 py-8 dark:border-zinc-700/40">
      <div className="mx-auto max-w-7xl px-10 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-8 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-0 flex flex-auto flex-col justify-between">
              <blockquote className="text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  “David is a joy to work with and is especially talented at
                  rapid prototyping while writing clean and readable code. He
                  can effortlessly deconstruct a complex problem into digestible
                  parts, helping his entire team create elegant solutions
                  efficiently. Many engineers write clean code, and most can
                  find acceptable solutions in a crunch. David is the rare
                  engineer that can can operate at the elusive intersection of
                  efficiency and elegance.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src={travisAvatar}
                  alt=""
                />
                <div className="text-sm">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Travis Tillman
                  </div>
                  <div className="text-zinc-400 dark:text-zinc-500">
                    Entrepreneur & Software Engineer
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-zinc-100 pt-10 dark:border-zinc-700/40 sm:pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-0 flex flex-auto flex-col justify-between">
              <blockquote className="text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  “I had the pleasure of working with David during his
                  internship at Dollar Shave Club. David is the kind of person
                  that charges into a problem, and comes up with the best
                  solution. His technical literacy combined with natural UX
                  skills will be a valuable asset to any team. Plus, he is an
                  overall awesome person.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src={wyattAvatar}
                  alt=""
                />
                <div className="text-sm">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Wyatt Thompson
                  </div>
                  <div className="text-zinc-400 dark:text-zinc-500">
                    Director of Product
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            David Inoa <br />
            <span className="text-5xl">Web Engineer</span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit rem iste delectus consequatur modi suscipit
            reiciendis, ipsam tempore, eum nulla labore doloribus non iusto at
            excepturi voluptate, numquam maxime placeat!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <Portfolio />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
