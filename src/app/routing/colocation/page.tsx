import Image from "next/image"

const image = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-colocation.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"
const link = "https://nextjs.org/docs/app/building-your-application/routing/colocation"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Colocação
      </h2>

      <p className="mb-2">
        Além de <a className="text-cyan-200" href="/routing/nested-routes">arquivos especiais</a>
        você tem a opção de colocar seus próprios arquivos (por exemplo, components, styles, tests, etc) dentro de pastas no diretório app.
      </p>

      <p className="mb-2">
        Embora as pastas definam rotas, apenas o conteúdo retornado por pages.js ou route.js pode ser endereçado publicamente.

        Por conta disso você pode colocar seus arquivos, components, styles, tests, etc dentro de pastas no diretório app.
      </p>

      <Image alt="Colocation" src={image} width={600} height={224} className="mt-2" />

      <p className="mt-4">
        Veja mais sobre <a href={link} className=" text-cyan-200">Colocação e Organização de Projeto</a>
      </p>
    </div>
  )
}