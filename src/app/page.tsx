import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-slate-900">
      <div>
        <h1 className='text-cyan-400 text-2xl font-bold mb-4'>
          Fundamentos de Next.js
        </h1>

        <Link href='/routing' className="text-cyan-200 underline">
          Routing (Roteamento)
        </Link>
      </div>
    </main>
  )
}
