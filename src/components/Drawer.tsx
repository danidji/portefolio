import {AccordionComponent} from './AccordionComponent'

export function Drawer() {
  return (
    <div className='h-full w-[250px] bg-background-light rounded-lg shadow p-4'>
      <AccordionComponent title='Menu' content={<div>Menu</div>} />
    </div>
  )
}
