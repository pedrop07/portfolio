import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { cn } from '@/lib/utils'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Pedro Parente',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(raleway.className)}>
        <div
          className='fixed inset-0 -z-10 transition'
          style={{ background: 'radial-gradient(2000px at 50% 0px, #0011ff3b, transparent 80%)' }}
        />
        {children}
      </body>
    </html>
  )
}
