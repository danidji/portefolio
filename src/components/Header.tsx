'use client'

import useAppStore from '@/store'
import {Button} from './ui/button'

export default function Header() {
  const {headerContent} = useAppStore(store => ({
    headerContent: store.headerContent,
  }))

  return (
    <div className='w-full h-16 flex items-center justify-between'>
      <p className='text-2xl font-semibold'>{headerContent?.title || ''}</p>
      {headerContent?.buttonText && (
        <Button onClick={headerContent.onClickFcn}>
          {headerContent.buttonText}
        </Button>
      )}
    </div>
  )
}
