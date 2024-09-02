'use client'

import {use, useEffect} from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {usePathname} from 'next/navigation'

import {EMenuItems} from '@/models'
import {AccordionComponent} from './AccordionComponent'
import {useTranslation} from '@/app/i18n/client'
import useAppStore from '@/store'
import {Icon} from './Icon'
import {getUserDetails, logoutUser} from '@/actions'

export function Drawer({lng}: {lng: string}) {
  const {t} = useTranslation(lng)
  const {actualLocation, setUser, clearUser, setActualLocation} = useAppStore(
    store => ({
      actualLocation: store.actualLocation,
      setUser: store.setUser,
      clearUser: store.clearUser,
      setActualLocation: store.setActualLocation,
    }),
  )
  const pathname = usePathname()

  useEffect(() => {
    saveUserInfos()
  }, [])

  useEffect(() => {
    const location = pathname.split('/').pop()
    if (location) {
      setActualLocation(location as EMenuItems)
    }
  }, [pathname])

  const saveUserInfos = async () => {
    try {
      const user = await getUserDetails()
      setUser(user)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='h-full w-[250px] bg-background-light rounded-lg shadow p-4 flex flex-col justify-between items-center'>
      <AccordionComponent title={t('app.content')}>
        <ul className='flex flex-col pl-[56px] gap-2 mt-2'>
          {Object.values(EMenuItems).map(item => (
            <li
              key={item}
              className='flex'
              onClick={() => setActualLocation(item)}>
              <Link
                href={`/backoffice/dashboard/${item}`}
                className={clsx(
                  'flex-1 text-base hover:underline hover:text-primary hover:font-bold',
                  actualLocation === item && 'text-primary font-bold underline',
                )}>
                {t(`app.${item}`)}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionComponent>

      <button
        onClick={async () => {
          clearUser()
          await logoutUser()
        }}
        className='hover:bg-destructive/50 p-1 rounded-lg'>
        <Icon type='logout' size='26px' />
      </button>
    </div>
  )
}
