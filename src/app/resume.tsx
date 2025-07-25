import { Button } from '@/components/Button'
import blackrockLogo from '@/images/resume/blackrock.jpeg'
import ciscoLogo from '@/images/resume/cisco.svg'
import dollarShaveClubLogo from '@/images/resume/dollar-shave-club.png'
import geniusPlazaLogo from '@/images/resume/genius-plaza.webp'
import inspiratoLogo from '@/images/resume/inspirato.jpeg'
import yieldxLogo from '@/images/resume/yieldx.jpeg'
import Image, { type ImageProps } from 'next/image'

type RoleType = {
  company: string
  title: string
  logo: ImageProps['src'] | string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
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

function Role({ role }: { role: RoleType }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

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

export default function Resume() {
  const resume: Array<RoleType> = [
    {
      company: 'Cisco',
      title: 'Software Engineer',
      logo: ciscoLogo,
      start: '2024',
      end: 'Present',
    },

    {
      company: 'Inspirato',
      title: 'UI Engineer',
      logo: inspiratoLogo,
      start: '2021',
      end: '2024',
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
        {resume.map((role) => (
          <Role key={role.toString()} role={role} />
        ))}
      </ol>
      <Button
        href="/David-Inoa-Resume.pdf"
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
