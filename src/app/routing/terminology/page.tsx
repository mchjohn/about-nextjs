export default function Terminology() {
  return (
    <div className="flex min-h-screen flex-col px-24 pt-4 bg-slate-950 text-white">
      <h2 className='text-cyan-400 text-xl font-bold mb-4'>
        Terminologia
      </h2>

      <ul className="list-disc">
        <li>
          Tree: Convenção para visualizar estrutura hierárquica.
          Ex.: uma tree de componentes com componentes pai e filhos, uma restrutura de pastas, etc.
        </li>
        <li>
          - Subtree: Parte de uma tree, começando em uma nova raiz(root)(primeira)
          e terminando nas folhas (leaf)(última).
        </li>
        <li>
          - Root: Primeiro node(nó) em uma tree ou subtree, como um layout root.
        </li>
        <li>
          - Leaf: Node(nó) em uma subtree que não possuem filhos, como o último segmento em um caminho de URL.
        </li>
      </ul>

      <a
        href="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-component-tree.png&w=1920&q=75&dpl=dpl_5JPA2uZyexw5ywdVLYC3eSAxYEjV"
        target="_blank"
        className="mt-1 mb-4 text-cyan-100 underline"
      >
        Ver imagem para melhor compreensão.
      </a>

      <ul className="list-disc">
        <li>
          - URL segment: Parte do path da URL delimitado por &quot;/.
        </li>
        <li>
          - URL Path: Parte da URL que vem depois do domínio (composta por segmentos).
        </li>
      </ul>

      <a
        href="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-url-anatomy.png&w=1920&q=75&dpl=dpl_5JPA2uZyexw5ywdVLYC3eSAxYEjV"
        target="_blank"
        className="mt-1  mb-4 text-cyan-100 underline"
      >
        Ver imagem para melhor compreensão.
      </a>
    </div>
  )
}