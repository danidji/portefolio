import {useTranslation} from '@/app/i18n'
import {Icon, Input, PasswordInput} from '@/components'

export default async function Login({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = await useTranslation(lng)

  return (
    <main className=''>
      <h1>Login</h1>
    </main>
  )
}
