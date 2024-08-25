'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {InputField, PasswordInput} from '@/components'
import {RegisterSchema, TRegister} from '@/models'
import {useTranslation} from '@/app/i18n/client'

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
        <InputField {...register('email')} label='Email' icon='email' />
        <PasswordInput {...register('password')} />
        <InputField {...register('firstname')} label='Prénom' icon='user' />
        <InputField {...register('lastname')} label='Nom' icon='user' />
      </form>
    </main>
  )
}
