"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  const path = pathName === '/routing' ? '/' : '/routing'

  return (
    <section>
      <header
        className={`
          flex items-center justify-between
          w-screen h-32 px-10
          bg-gradient-to-r from-slate-950 to-slate-900
        `}
      >
        <h1 className="text-cyan-400 font-bold text-2xl">
          Fundamentos de roteamento
        </h1>

        <Link href={path} className="text-white font-medium">Voltar</Link>
      </header>

      {children}
    </section>
  )
}