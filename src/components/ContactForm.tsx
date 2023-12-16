'use client'

import { useForm } from '@formspree/react'
import toast from 'react-hot-toast'
import { Button } from './Button'

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

function PaperPlaneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.5,2.5 L21.5,12 L2.5,21.5 L2.5,14 L17,12 L2.5,10 Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        transform="rotate(-26 12 12)"
      />
    </svg>
  )
}

export default function ContactForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM as string)

  return (
    <form
      onSubmit={(e) => {
        submit(e)
          .then(() => {
            toast.success('Your message has been sent successfully 😎')
            const form = e.target as HTMLFormElement
            form.reset()
          })
          .catch((error) => {
            toast.error(
              error instanceof Error
                ? error.message
                : 'Your message could not be sent 😟 Please try again or reach out directly to davidinoa@gmail.com',
            )
          })
      }}
      className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        Get in touch
      </h2>
      <p className="my-6 text-sm text-zinc-600 dark:text-zinc-400">
        Hey there! I&apos;m happy to chat, help answer any questions, or
        collaborate on something cool. Feel free to reach out!
      </p>
      <div className="flex grow flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Name"
          className="min-w-0 flex-auto grow-0 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          className="min-w-0 flex-auto grow-0 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          aria-label="Message"
          className="min-h-[5lh] flex-auto grow resize-none appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button
          type="submit"
          className="flex items-center gap-2"
          aria-disabled={formState.submitting}
        >
          Send message
          <PaperPlaneIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
