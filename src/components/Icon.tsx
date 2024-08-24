'use client'

import Image from 'next/image'

import IconeSvg from '@/assets/icones'
import {cn} from '@/lib/utils'

type IconProps = {
  type: string
  containerClass?: string
  size: string
  height?: string
  color?: string
}

export function Icon({
  type,
  containerClass,
  size,
  height,
  // color,
}: IconProps): JSX.Element {
  const IconMappingObject: Record<string, JSX.Element> = {
    [type]: (
      <div
        className={cn('relative', containerClass)}
        style={{width: size, height: height || size}}>
        <Image src={IconeSvg[type]} alt={`${type} icon`} fill />
      </div>
    ),
  }
  return <>{IconMappingObject[type]}</>
}
