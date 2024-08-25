import {headers} from 'next/headers'

import {ImageElement} from '@/components'

export default function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  const headersList = headers()
  const referer = headersList.get('referer')
  const page = referer?.split('/').pop()

  return (
    <main className='h-full w-full flex flex-col md:flex-row items-center px-24'>
      <div className='flex-1 px-20'>
        <div className='p-10 rounded-lg border border-border bg-background-light'>
          {children}
        </div>
      </div>
      <div className='flex-1 h-full'>
        <ImageElement
          type={page ?? 'register'}
          containerClass='w-full h-full'
        />
      </div>
    </main>
  )
}
