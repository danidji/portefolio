'use server'

import {auth} from '@/auth'

export default async function Home({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  // const {t} = useTranslation(lng)

  const session = await auth()

  console.log(session)

  return <div className=''>DASHBOARD</div>
}
