'use client'

export default function Layout({
  children,
  params: {lng},
}: Readonly<{children: React.ReactNode; params: {lng: string}}>) {
  return <div className='h-full w-full '>{children}</div>
}
