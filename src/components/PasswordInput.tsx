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
      <div className='relative'>
        <Input
          type={showPassword ? EInputType.TEXT : EInputType.PASSWORD}
          ref={ref}
          {...props}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-2 top-0 h-full'>
          <Icon type={showPassword ? 'eye_close' : 'eye_open'} size='20px' />
        </button>
      </div>
    )
  },
)
