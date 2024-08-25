import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { PHProvider } from './analytics/provider'

export const metadata: Metadata = {
  title: {
    template: '%s - David Inoa',
    default: 'David Inoa - Web Engineer',
  },
  description:
    'Portfolio of David Inoa, a web engineer based in the United States.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PHProvider>
      <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body
          className="flex h-full bg-zinc-50 dark:bg-black"
          suppressHydrationWarning
        >
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </PHProvider>
  )
}
