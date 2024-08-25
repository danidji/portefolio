import {forwardRef} from 'react'
import {Input, InputProps} from './ui/input'
import {Icon} from './Icon'
import clsx from 'clsx'

type InputFieldProps = InputProps & {
  label: string
  icon?: string
  isError?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({label, icon, isError, ...props}, ref) => {
    return (
      <div className='flex flex-col gap-2'>
        <label htmlFor={props.name}>{label}</label>
        <div className='relative'>
          {icon && (
            <div className='absolute left-4 flex h-full items-center'>
              <Icon type={icon} size='20px' />
            </div>
          )}
          <Input
            ref={ref}
            {...props}
            className={clsx(icon ? 'pl-12' : 'pl-4')}
            isError={!!isError}
          />
        </div>
      </div>
    )
  },
)
