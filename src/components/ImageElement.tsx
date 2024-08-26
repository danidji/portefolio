'use client'

import Image from 'next/image'

import ImagesSvg from '@/assets/images'
import {cn} from '@/lib/utils'

type ImageElementProps = {
  type: string
  containerClass?: string
}

export function ImageElement({
  type,
  containerClass,
}: ImageElementProps): JSX.Element {
  const IconMappingObject: Record<string, JSX.Element> = {
    [type]: (
      <div className={cn('relative', containerClass)}>
        <Image src={ImagesSvg[type]} alt={`${type} icon`} fill priority />
      </div>
    ),
  }
  return <>{IconMappingObject[type]}</>
}
