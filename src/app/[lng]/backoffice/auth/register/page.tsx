'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {InputField, PasswordInput} from '@/components'
import {RegisterSchema, TRegister} from '@/models'
import {useTranslation} from '@/app/i18n/client'
import {Button} from '@/components/ui/button'

export default function Register({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = useTranslation(lng)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TRegister>({
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = (data: TRegister) => {
    console.log(data)
  }

  return (
    <main className=''>
      <h1 className='text-3xl font-bold'>{t('auth.hello')}</h1>
      <h1 className='text-3xl font-bold'>{t('auth.welcome')}</h1>

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
        <InputField
          {...register('firstname')}
          label={t('auth.firstname')}
          icon='user'
          isError={!!errors.firstname}
        />
        <InputField
          {...register('lastname')}
          label={t('auth.lastname')}
          icon='user'
          isError={!!errors.lastname}
        />
        <Button type='submit' className='mt-2 text-base'>
          {t('auth.register')}
        </Button>
      </form>
    </main>
  )
}
