const define_routes = "https://nextjs.org/docs/app/building-your-application/routing/defining-routes"
const special_files = "https://nextjs.org/docs/app/building-your-application/routing#file-conventions"
const rules_folders_files = "https://nextjs.org/docs/app/building-your-application/routing#roles-of-folders-and-files"

export default function RolesFoldersFiles() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Regras de pastas e arquivos
      </h2>

      <p className="mb-2">
        Next.js usa um file-system baseado em roteamento, onde:
      </p>

      <ul className="list-disc">
        <li>
          <b>Folders:</b> São usadas para definir rotas.
          Uma rota é um path único de pastas aninhadas, seguindo a hierarquia do file-system da pasta
          root até uma pasta leaf que inclui um arquivo pages.ts. <a href={define_routes}>Consulte definindo rotas</a>.
        </li>
        <li>
          <b>Files:</b> Usado para criar UI que é mostrada para um segmento de rota. <a href={special_files}>Consulte definindo rotas</a>.
        </li>
      </ul>

      <a
        href={rules_folders_files}
        target="_blank"
        className="mt-4 mb-4 text-cyan-100 underline"
      >
        Documentação para Regras de Pastas e Arquivos.
      </a>
    </div>
  )
}