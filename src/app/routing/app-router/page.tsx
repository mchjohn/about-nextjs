const pages_router = "https://nextjs.org/docs/pages/building-your-application/routing"
const client_components = "https://nextjs.org/docs/app/building-your-application/rendering/client-components"
const react_server_components = "https://nextjs.org/docs/app/building-your-application/rendering/server-components"

export default function AppRouter() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        App Router
      </h2>

      <p className="mb-2">
        Introduzido na versão 13 do Next.js, App router é uma nova forma
        de construir roteamento, ele é construído com
        <a href={react_server_components} className="text-cyan-400"> React Server Components</a>,
        ele suporta shared layouts, nested routing, loading states, error handling, e mais.
      </p>

      <p className="mb-2">
        O app router funciona em um novo diretório chamado app. O diretório app funciona junto com
        o diretório pages para permitir a adoção incremental. Então é possível ter rotas com a forma
        mais antiga (pages) e rotas com a nova forma (app).
      </p>

      <a
        href={pages_router}
        target="_blank"
        className="mt-1 mb-4 text-cyan-100 underline"
      >
        Documentação para Pages Router.
      </a>

      <span className="italic text-sm mb-4">
        É bom saber: o App Router tem prioridade sobre o Pages Router.
        As rotas entre diretórios não devem resolver para o mesmo caminho de URL
        e causarão um erro em tempo de compilação para evitar conflitos.
      </span>

      <p>
        Por default, components dentro do app são React Server Components. Podendo também usar
        <a href={client_components} className="text-cyan-400"> Client Components</a>.
      </p>
    </div>
  )
}