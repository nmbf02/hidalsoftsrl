import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hidalsoft, S.R.L.',
  description: 'Somos una empresa dedicada al desarrollo de sistemas financieros, los cuales sirven como herramienta para agilizar los procesos de la empresa y garantizar la obtención de información con eficacia y veracidad.',
    generator: 'v0.dev'
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
