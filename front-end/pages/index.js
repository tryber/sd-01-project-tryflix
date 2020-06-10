import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <Link href="/favoritos">Favoritos</Link>
    </div>
  )
}
