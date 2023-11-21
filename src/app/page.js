import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl">Welcome to</h2>
      <h1 className='text-8xl font-bold'><span className='text-red-400'>Med</span>Match</h1>
      <h3 className="text-3xl">Let's <Link href="/dashboard" className="hover:underline hover:text-red-400 cursor-pointer">get started</Link></h3>
    </main>
  )
}
