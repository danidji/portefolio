'use client'

import {forwardRef, useState} from 'react'

import {EInputType} from '@/models'

import {Input, InputProps} from './ui/input'
import {Icon} from './Icon'

type PasswordInputProps = InputProps & {
  errorMsg?: string
  label: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({errorMsg, label, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <div className='flex flex-col gap-2'>
        <label htmlFor={props.name}>{label}</label>

        <div className='relative'>
          <div className='absolute left-4 flex h-full items-center'>
            <Icon type='password' size='20px' />
          </div>
          <Input
            type={showPassword ? EInputType.TEXT : EInputType.PASSWORD}
            ref={ref}
            {...props}
            className='pl-12'
            isError={!!errorMsg}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-4 top-0 h-full'
            type='button'>
            <Icon type={showPassword ? 'eye_close' : 'eye_open'} size='20px' />
          </button>
          {errorMsg && (
            <span className='absolute -bottom-5 left-2 text-xs text-destructive'>
              {errorMsg}
            </span>
          )}
        </div>
      </div>
    )
  },
)
