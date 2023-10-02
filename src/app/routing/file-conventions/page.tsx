import Image from "next/image"

const image = "https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_9NSF3Nu4xN2tuTcXKDqNYHV25EEB"

export default function RouteSegments() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Convenções de arquivos
      </h2>

      <p className="mb-2">
        Next.js providencia alguns arquivos especiais para criar UI com comportamento específicos em rotas aninhadas.
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
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/pages-and-layouts#layouts">
                <code>layout</code>
              </a>
            </td>
            <td>Compartilha a UI com um segmento e seus filhos</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/pages-and-layouts#pages">
                <code>page</code>
              </a>
            </td>
            <td>UI de uma rota que pode ser acessada publicamente</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/loading-ui-and-streaming">
                <code>loading</code>
              </a>
            </td>
            <td>Loading para um segmento e seus filhos</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/api-reference/file-conventions/not-found">
                <code>not-found</code>
              </a>
            </td>
            <td>UI de Not found para um segmento e seus filhos</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/error-handling">
                <code>error</code>
              </a>
            </td>
            <td>UI de Error para um segmento e seus filhos</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/error-handling">
                <code>global-error</code>
              </a>
            </td>
            <td>UI de erro global</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/route-handlers">
                <code>route</code>
              </a>
            </td>
            <td>API de endpoint Server-side</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/building-your-application/routing/pages-and-layouts#templates">
                <code>template</code>
              </a>
            </td>
            <td>UI de re-render</td>
          </tr>
          <tr>
            <td>
              <a className="text-cyan-200" href="/docs/app/api-reference/file-conventions/default">
                <code>default</code>
              </a>
            </td>
            <td>UI de fallback para <a className="text-cyan-200" href="/docs/app/building-your-application/routing/parallel-routes">
              Parallel Routes
            </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}