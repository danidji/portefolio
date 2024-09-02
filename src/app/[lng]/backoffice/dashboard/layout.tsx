import {auth} from '@/auth'
import {Drawer} from '@/components'
import Header from '@/components/Header'
import {redirect} from 'next/navigation'

export default async function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  const session = await auth()
  console.log(session)
  if (!session?.user) {
    redirect('/backoffice/auth/login')
  }

  return (
    <div className='h-full w-full flex gap-4 p-4'>
      <Drawer lng={lng} />
      <div className='h-full w-[calc(100%-250px)] bg-background-light rounded-lg shadow py-4 px-8'>
        <Header />
        {children}
      </div>
    </div>
  )
}
