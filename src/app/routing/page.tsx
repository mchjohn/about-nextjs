import Link from "next/link"

export default function AppVsPages() {
  return (
    <div className="flex min-h-screen flex-col px-10 pt-4 bg-slate-950 text-white">
      <p>O esqueleto de toda aplicação é o roteamento (routing).</p>
      <p>
        Essa página introduz os conceitos fundamentais de roteamento
        para web e como lidar com roteamento em Next.js.
      </p>

      <a href="https://nextjs.org/docs/app/building-your-application/routing"
        target="_blank"
        className="mt-2 text-cyan-100 underline"
      >
        Ver doc oficial
      </a>

      <nav className="mt-10 flex flex-col gap-1">
        <Link href='/routing/terminology' className="text-cyan-200 underline">
          Terminologia
        </Link>
        <Link href='/routing/app-router' className="text-cyan-200 underline">
          App Router
        </Link>
        <Link href='/routing/roles-folders-files' className="text-cyan-200 underline">
          Regras de pastas e arquivos
        </Link>
        <Link href='/routing/route-segments' className="text-cyan-200 underline">
          Segmentos de rota
        </Link>
        <Link href='/routing/nested-routes' className="text-cyan-200 underline">
          Rotas aninhadas
        </Link>
        <Link href='/routing/file-conventions' className="text-cyan-200 underline">
          Convenções de arquivos
        </Link>
        <Link href='/routing/component-hierarchy' className="text-cyan-200 underline">
          Hierarquia de componente
        </Link>
        <Link href='/routing/colocation' className="text-cyan-200 underline">
          Colocação
        </Link>
        <Link href='/routing/advanced-routing-patterns' className="text-cyan-200 underline">
          Padrões avançados de roteamento
        </Link>
      </nav>
    </div>
  )
}