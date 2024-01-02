import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'sbector: Productor de arte contemporáneo y programador creativo',
  description: 'Contacta con Saúl Becerra Torres',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`bg-zinc-900 text-gray-50 ${inter.className}`}>
      <body>
          {children}
      </body>
    </html>
  )
}