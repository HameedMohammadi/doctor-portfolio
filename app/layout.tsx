import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Maihan Abdullah, MD, MPH | Public Health Researcher',
  description:
    'Academic portfolio of Dr. Maihan Abdullah, MD, MPH — public health researcher, cancer control expert, health policy leader, and academic.',
  keywords: [
    'Maihan Abdullah',
    'Dr. Maihan Abdullah',
    'public health',
    'cancer control',
    'cancer research',
    'health policy',
    'Afghanistan',
    'public health research',
    'academic researcher',
  ],
  authors: [
    {
      name: 'Dr. Maihan Abdullah',
    },
  ],
  openGraph: {
    title: 'Dr. Maihan Abdullah, MD, MPH | Public Health Researcher',
    description:
      'Academic portfolio of Dr. Maihan Abdullah, MD, MPH — public health researcher, cancer control expert, health policy leader, and academic.',
    type: 'website',
    siteName: 'Dr. Maihan Abdullah',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}