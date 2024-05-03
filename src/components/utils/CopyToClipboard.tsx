import { Button, type ButtonProps } from '@/components/ui/button'
import { getErrorMessage } from '@/lib/error'
import { Icon } from '@iconify-icon/react'
import React, { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

interface Props extends ButtonProps {
  truncate?: boolean
  chars?: number
  value: string
  children?: React.ReactNode
}

export default function CopyToClipboard(props: Props) {
  const { truncate = true, chars = 14, value, children } = props
  const wrapperRef = React.createRef<HTMLButtonElement>()
  const [infoNotice, setInfoNotice] = useState('')

  const triggerCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value.toString())
    } catch (error) {
      toast.error(getErrorMessage(error))
    }

    await new Promise((r) => setTimeout(() => r(setInfoNotice('Copied to clipboard!')), 50))

    setTimeout(() => {
      setTimeout(() => setInfoNotice(''), 50)
    }, 2000)
  }, [value])

  const displayValue = truncate
    ? value.length <= chars
      ? value
      : `${value.slice(0, chars / 2 - 1)}...${value.slice(-chars / 2 + 2)}`
    : value

  return (
    <Button {...props} ref={wrapperRef} onClick={triggerCopy}>
      {children && children}
      {infoNotice || (
        <>
          {displayValue}
          <Icon icon="ic:baseline-content-copy" className="-mr-2 ml-1 text-xl" />
        </>
      )}
    </Button>
  )
}
