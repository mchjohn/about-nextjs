import Image from "next/image"

const image = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ffile-conventions-component-hierarchy.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"
const image2 = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-file-conventions-component-hierarchy.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Hierarquia de Componente
      </h2>

      <p className="mb-2">
        Components react definidos em <a className="text-cyan-200" href="/routing/nested-routes">arquivos especiais</a>
        de um segmento de rota são renderizados em uma hierarquia específica:
      </p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code className="text-cyan-200">layout.js</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="text-cyan-200">template.js</code>
            </td>
          </tr>
          <tr>
            <td>
              <code className="text-cyan-200">error.js</code>
            </td>
            <td>Error boundary do react</td>
          </tr>
          <tr>
            <td>
              <code className="text-cyan-200">loading.js</code>
            </td>
            <td>Suspende boundary do react</td>
          </tr>
          <tr>
            <td>
              <code className="text-cyan-200">not-found.js</code>
            </td>
            <td>Error boundary do react</td>
          </tr>
          <tr>
            <td>
              <code className="text-cyan-200">page.js</code> ou <code className="text-cyan-200">nested layout.js</code>
            </td>
          </tr>
        </tbody>
      </table>

      <Image alt="Componente hierarchy" src={image} width={600} height={224} className="mt-2" />

      <p className="mb-2 mt-8">
        Em uma rota aninhada, os componentes de um segmento serão aninhados dentro dos components do seu pai.
      </p>

      <Image alt="Componente hierarchy" src={image2} width={600} height={224} />
    </div>
  )
}