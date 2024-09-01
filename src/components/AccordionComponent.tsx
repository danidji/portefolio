import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Icon} from './Icon'
import {PropsWithChildren} from 'react'

type AccordionProps = {
  title: string
  colapsible?: boolean
} & PropsWithChildren

export function AccordionComponent({
  title,
  children,
  colapsible = true,
}: AccordionProps) {
  return (
    <Accordion type='single' collapsible={colapsible} className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          <Icon type='content' size='24px' />
          <p className='font-light leading-none flex-1 text-start'>{title}</p>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
