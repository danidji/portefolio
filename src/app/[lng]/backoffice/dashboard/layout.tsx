import {auth} from '@/auth'
import {Drawer} from '@/components'
import {redirect} from 'next/navigation'

export default async function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  const session = await auth()
  if (!session?.user) {
    redirect('/backoffice/auth/login')
  }

  return (
    <div className='h-full w-full flex gap-4 p-4'>
      <Drawer />
      <div className='h-full w-[calc(100%-250px)]'>{children}</div>
    </div>
  )
}
