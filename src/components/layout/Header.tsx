import { Cart } from '@/components/layout/Cart'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import logo from '@public/logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="z-10 mb-6 flex w-full max-w-5xl items-center justify-between">
      <div className="pointer-events-none flex items-center gap-2 font-medium">
        <Image className="h-auto w-8" src={logo} alt="logo" />
        TMarket
      </div>

      <div className="inline-flex gap-3">
        <Cart />
        <ThemeToggle />
      </div>
    </div>
  )
}
