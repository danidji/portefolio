import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Icon} from './Icon'

type AccordionProps = {
  title: string
  content: JSX.Element | JSX.Element[]

  colapsible?: boolean
}

export function AccordionComponent({
  title,
  content,
  colapsible = true,
}: AccordionProps) {
  return (
    <Accordion type='single' collapsible={colapsible} className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          <Icon type='content' size='24px' />
          <p className='font-light leading-none flex-1 text-start'>{title}</p>
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
