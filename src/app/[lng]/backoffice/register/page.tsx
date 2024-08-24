import {useTranslation} from '@/app/i18n'
import {Icon, Input, PasswordInput} from '@/components'

export default async function Register({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = await useTranslation(lng)

  return (
    <main className=''>
      <h1>{t('common.hello')}</h1>

      <PasswordInput placeholder='Password' />
    </main>
  )
}
