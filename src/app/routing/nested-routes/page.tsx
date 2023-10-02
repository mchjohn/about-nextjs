import Image from "next/image"

const image = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Rotas aninhadas
      </h2>

      <p className="mb-2">
        Para criar rotas aninhadas, podemos aninhas pastas dentro de outras.
        Ex.: Para adicionar uma rota /dashboard/settings, criamos uma pasta dashboard e dentro dela uma pasta settings.
      </p>

      <p className="mb-2">
        Ficando:
        <br />
        - <code className="text-cyan-500">/</code> (Root segment)
        <br />
        - <code className="text-cyan-500">dashboard</code> (Segment)
        <br />
        - <code className="text-cyan-500">settings</code> (Leaf segment)
      </p>
    </div>
  )
}