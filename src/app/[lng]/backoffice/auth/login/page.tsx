'use client'

import {useTranslation} from '@/app/i18n/client'
import {Icon, Input, InputField, PasswordInput} from '@/components'
import {Button} from '@/components/ui/button'
import {LoginSchema, TLogin} from '@/models'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

export default function Login({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = useTranslation(lng)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TLogin>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data: TLogin) => {
    console.log(data)
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

        <Button type='submit' className='mt-2 text-base'>
          {t('auth.login')}
        </Button>
      </form>
    </main>
  )
}
