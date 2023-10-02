import Image from "next/image"

const image = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Segmentos de rota
      </h2>

      <p className="mb-2">
        Cada pasta em uma rota representa um segmento de rota.
        Cada segmento de rota é mapeado para um segmento correspondente em uma URL path.
      </p>

      <Image alt="Route segment" src={image} width={600} height={224} />
    </div>
  )
}