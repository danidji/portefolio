import {ImageElement} from '@/components'

export default async function Home({
  params: {lng},
}: Readonly<{params: {lng: string}}>) {
  return (
    <div className='h-full w-full flex justify-center'>
      <ImageElement type='home' containerClass='w-1/2 h-full' />
    </div>
  )
}
