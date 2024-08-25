'use client'

import {forwardRef, useState} from 'react'

import {Input, InputProps} from './ui/input'
import {EInputType} from '@/models'
import {Icon} from './Icon'

type PasswordInputProps = InputProps & {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className='flex flex-col gap-2'>
        <label htmlFor={props.name}>Mot de passe</label>
        <div className='relative'>
          <div className='absolute left-4 flex h-full items-center'>
            <Icon type='password' size='20px' />
          </div>
          <Input
            type={showPassword ? EInputType.TEXT : EInputType.PASSWORD}
            ref={ref}
            {...props}
            className='pl-12'
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-4 top-0 h-full'>
            <Icon type={showPassword ? 'eye_close' : 'eye_open'} size='20px' />
          </button>
        </div>
      </div>
    )
  },
)
