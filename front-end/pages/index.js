import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <h2><Link href="/favoritos">Favoritos</Link></h2>
        <h2><Link href="/series">series</Link></h2>
    </div>
  )
}
