import MainLayout from '@/components/layout/MainLayout'
import { CustomToast } from '@/components/utils/CustomToast'
import { ThemeProvider } from '@/components/utils/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
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
      <Toaster position="bottom-center" reverseOrder={false}>
        {(t) => {
          return <CustomToast t={t} />
        }}
      </Toaster>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
