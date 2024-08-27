'use server'

export default async function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  return <div className='h-full w-full '>{children}</div>
}
