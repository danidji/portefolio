'use client'

import {usePathname} from 'next/navigation'

import {ImageElement} from '@/components'

export default function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  const pathname = usePathname()
  const page = pathname.split('/').pop()

  return (
    <main className='h-full w-full flex flex-col md:flex-row justify-center  items-center md:justify-around md:px-24'>
      <div className=' flex justify-end'>
        <div className='p-6 rounded-lg border border-border bg-background-light w-[400px] '>
          {children}
        </div>
      </div>
      <div className='w-[700px] h-full hidden md:block'>
        <ImageElement
          type={page ?? 'register'}
          containerClass='w-full h-full'
        />
      </div>
    </main>
  )
}
