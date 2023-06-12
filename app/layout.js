import '../styles/globals.css'
import Nav from '@components/nav'
import Footer from '@components/footer'
import Provider from './Provider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UserToken',
  description: 'Focused on getting user tokens',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Provider>  
          {children}
       </Provider>
      </body>
    </html>
  )
}
