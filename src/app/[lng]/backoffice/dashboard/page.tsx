import {redirect} from 'next/navigation'

import {auth} from '@/auth'

export default async function Home({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  // const {t} = useTranslation(lng)

  const session = await auth()
  if (!session?.user) {
    redirect('/backoffice/auth/login')
  }

  console.log(session)

  return <div className=''>DASHBOARD</div>
}
