// pages/lugares.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Lugares: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lugares - Comunidad Latina en Estocolmo</title>
        <meta name="description" content="Explora lugares emblemáticos para visitar en Estocolmo." />
      </Head>

      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <Link href="/" passHref>
          <Image src="/latinosestocolmo.webp" alt="Inicio" width={100} height={100} />
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/eventos" className="hover:underline">Eventos</Link>
          <Link href="/restaurantes" className="hover:underline">Restaurantes</Link>
          <Link href="/lugares" className="hover:underline">Lugares</Link>
        </div>
      </nav>

      <main className="p-4">
        <h1 className="text-4xl font-bold text-center mb-4">Lugares para Visitar</h1>

        {/* Example Place Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Gamla Stan</h2>
          <div className="flex justify-center mb-4">
            <Image src="/gamlastan.webp" alt="Gamla Stan" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Gamla Stan, el casco antiguo de Estocolmo, es uno de los centros medievales más grandes y mejor conservados de Europa. Este es un lugar que no te puedes perder durante tu visita.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Museo Vasa</h2>
          <div className="flex justify-center mb-4">
            <Image src="/museovasa.webp" alt="Museo Vasa" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
          El buque de guerra del siglo XVII mejor conservado del mundo
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Drottninggatan</h2>
          <div className="flex justify-center mb-4">
            <Image src="/drottninggatan.jpg" alt="Drottninggatan" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Gamla Stan, el casco antiguo de Estocolmo, es uno de los centros medievales más grandes y mejor conservados de Europa. Este es un lugar que no te puedes perder durante tu visita.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Hornstull Marknad</h2>
          <div className="flex justify-center mb-4">
            <Image src="/hornstull.webp" alt="Gamla Stan" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
          Un mercado al aire libre muy popular en los meses de verano
          </p>
        </section>

        {/* Add more sections for different places as needed */}

      </main>
    </>
  );
};

export default Lugares;
