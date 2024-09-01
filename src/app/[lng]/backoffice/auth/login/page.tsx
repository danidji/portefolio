'use client'

import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'next/navigation'

import {useTranslation} from '@/app/i18n/client'
import {InputField, PasswordInput, Button} from '@/components'
import {LoginSchema, TLogin} from '@/models'
import {loginUser} from '@/actions'

export default function Login({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = useTranslation(lng)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: TLogin) => {
    await loginUser(data)
    router.push('/backoffice/dashboard')
  }

  return (
    <main className=''>
      <h1>{t('auth.hey')}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <InputField
          {...register('email')}
          label={t('auth.email')}
          icon='email'
          isError={!!errors.email}
        />
        <PasswordInput
          {...register('password')}
          label={t('auth.password')}
          errorMsg={errors.password ? t('auth.passwordError') : undefined}
        />

        <Button type='submit' className='mt-4 text-base'>
          {t('auth.login')}
        </Button>
      </form>
    </main>
  )
}
