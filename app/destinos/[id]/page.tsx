

import { destinos } from '@/app/data/destinos'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: Promise<{ id: string }>
}

export default async function DetalheDestino({ params }: Props) {
  const { id } = await params
  const destino = destinos.find(d => d.id === Number(id))

  if (!destino) {
    return <p>Destino não encontrado.</p>
  }

  return (
    <main style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px' }}>
      <Link href="/destinos">← Voltar para destinos</Link>
      <h1 style={{ margin: '20px 0 10px' }}>{destino.nome}</h1>
      <Image
        src={destino.imagem}
        alt={destino.nome}
        width={700}
        height={400}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>{destino.descricao}</p>
    </main>
  )
}