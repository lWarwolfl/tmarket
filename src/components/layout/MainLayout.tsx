import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomHead from '@/components/utils/CustomHead'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-family',
})

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <CustomHead />

      <main
        className={cn(
          'flex h-dvh min-h-fit flex-col items-center gap-6 p-6 lg:p-24',
          font.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
