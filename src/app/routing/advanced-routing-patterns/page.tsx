import Image from "next/image"

const link = "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
const link2 = "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Padrões avançados de roteamento
      </h2>

      <p className="mb-2">
        App Router fornece um conjunto de convenções para ajudar a implementar padrões de roteamento
        mais avançados. Esses incluem:
      </p>

      <p className="mb-2">
        <a href={link} className="text-cyan-200">Rotas Paralelas:</a> Permitem mostrar simultaneamente duas ou mais páginas na mesma visualização
        que podem ser navegadas de forma independente.
        Podem ser usadas para visualizações divididas que possuem sua própria subnavegação.
        Por exemplo. Painéis.
      </p>

      <p className="mb-2">
        <a href={link} className="text-cyan-200">Interceptando Rotas:</a> Permite interceptar uma rota e mostrá-la no contexto de outra rota.
        Podem ser usadas quando for importante manter o contexto da página atual.
        Por exemplo. Ver todas as tarefas ao editar uma tarefa ou expandir uma foto em um feed.
      </p>
    </div>
  )
}