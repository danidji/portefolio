'use client'

import {useTranslation} from '@/app/i18n/client'
import {InputField} from '@/components'
import {Textarea} from '@/components/ui/textarea'
import {UpdateUserSchema} from '@/models'
import useAppStore from '@/store'
import {zodResolver} from '@hookform/resolvers/zod'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

export default function Infos({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  const {t} = useTranslation(lng)

  const {user, setHeaderContent} = useAppStore(store => ({
    user: store.user,
    setHeaderContent: store.setHeaderContent,
  }))

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
  })

  useEffect(() => {
    setHeaderContent({
      title: t('app.infos'),
      buttonText: t('app.save'),
      onClickFcn: () => {
        handleSubmit(onSubmitInfos)()
      },
    })

    return () => {
      setHeaderContent(null)
    }
  }, [])

  const onSubmitInfos = (data: z.infer<typeof UpdateUserSchema>) => {
    console.log(data)
  }

  return (
    <div className='w-full h-[calc(100%-64px)] py-8'>
      <form className='flex flex-col gap-8'>
        <div className='flex items-center'>
          <label htmlFor='title' className='min-w-16 font-light text-lg'>
            {t('app.title')}
          </label>
          <InputField {...register('title')} />
        </div>
        <div className='flex items-center'>
          <label htmlFor='bio' className='min-w-16 font-light text-lg'>
            {t('app.bio')}
          </label>
          <Textarea {...register('bio')} />
        </div>
        <div className='flex items-center'>
          <label htmlFor='' className='min-w-16 font-light text-lg'>
            {t('auth.email')}
          </label>
          <InputField value={user?.email || ''} disabled />
        </div>
      </form>
    </div>
  )
}
