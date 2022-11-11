import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='h-screen overflow-y-scroll bg-gray-200'>
      <Header />
      <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
