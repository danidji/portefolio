import {redirect} from 'next/navigation'

export default function Home() {
  redirect('/backoffice/auth/login')

  return (
    <main className=''>
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        laborum cum totam molestiae rerum dolorem repellat odit, itaque numquam
        ex ad cumque quaerat debitis quisquam ratione aut minus unde! Dolores
        nam nisi animi possimus itaque magni quod rerum saepe sequi. Cum
        molestiae possimus accusamus autem deleniti iure, aliquid voluptas
        excepturi.
      </p>
    </main>
  )
}
