import { Head } from '@inertiajs/react'
import { useState } from 'react'
import { Button } from '~/components/ui/button'

export default function Home() {
  const todos = ['Les vrais gars savent', 'Les faibles ignorent tout', 'Les nous autres ecoutent']
  const [person, setPerson] = useState({ nom: 'Diallo', prenom: 'Aude', age: 15 })
  const increment = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  const handleNom = (e: { target: { value: string } }) => {
    setPerson({ ...person, nom: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }
  return (
    <div className="container">
      <Head title="Home" />{' '}
      <p className="text-red-700 ">
        L'age de {person.prenom} : {person.age}
      </p>
      <Button onClick={increment}>Incrementer</Button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" />
        <button>Envoyer</button>
      </form>
      <div className="container sm:columns-2 md:columns-3 lg:columns-2">
        <section className="border-2 border-red-900">1</section>
        <section className="border-2 border-red-900">2</section>
        <section className="border-2 border-red-900">3</section>
        <section className="border-2 border-red-900">4</section>
        <section className="border-2 border-red-900">5</section>
      </div>
      <div className="container px-7 py-8">
        <a className="inline-flex text-lg items-center px-3 py-2 rounded-lg font-medium text-white bg-yellow-700 hover:bg-blue-700">
          Lire plus
        </a>
      </div>
    </div>
  )
}

function Title({ color, children }: { color: string; children: React.ReactNode }) {
  return <h1 style={{ color: color }}>{children}</h1>
}

function Fin({ color, children }: { color: string; children: React.ReactNode }) {
  return <p style={{ color: color }}>{children}</p>
}
