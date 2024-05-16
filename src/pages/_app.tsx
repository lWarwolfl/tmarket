import MainLayout from '@/components/layout/MainLayout'
import { CustomToast } from '@/components/utils/CustomToast'
import { ThemeProvider } from '@/components/utils/ThemeProvider'
import ReactQueryProvider from '@/lib/ReactQueryProvider'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

interface PageProps extends AppProps {
  dehydratedState: unknown
}

export default function App({ Component, pageProps }: PageProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const loader = document.getElementById('globalLoader')
        if (loader) loader.className = 'loaded'
        document.body.style.overflowY = 'auto'
      }, 100)

      setTimeout(() => {
        const loader = document.getElementById('globalLoader')
        if (loader) loader.style.opacity = '0'
      }, 700)

      setTimeout(() => {
        const loader = document.getElementById('globalLoader')
        if (loader) loader.style.display = 'none'
      }, 1000)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Analytics />
      <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Toaster position="bottom-right" reverseOrder={false}>
          {(t) => {
            return <CustomToast t={t} />
          }}
        </Toaster>

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ReactQueryProvider>
    </ThemeProvider>
  )
}
