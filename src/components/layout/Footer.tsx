import { Icon } from '@iconify-icon/react'
import logo from '@public/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="pointer-events-none flex place-items-center gap-2 text-sm font-medium">
        <Image className="h-auto w-7" src={logo} alt="logo" /> TMarket
      </div>

      <div className="flex max-w-5xl items-center justify-center gap-2 text-center text-sm">
        Developed by
        <a
          href="https://github.com/lWarwolfl/tmarket"
          target="_blank"
          className="flex items-center gap-1"
        >
          <Icon icon="bxl:github" className="text-lg" />
          lWarwolfl
        </a>
      </div>
    </div>
  )
}
