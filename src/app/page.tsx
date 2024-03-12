// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comunidad Latina en Estocolmo</title>
        <meta name="description" content="Descubre eventos, restaurantes y lugares para la comunidad latina en Estocolmo" />
      </Head>

      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <Image src="/latinosestocolmo.webp" alt="Inicio" width={100} height={100} />
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/eventos" className="hover:underline">Eventos</Link>
          <Link href="/restaurantes" className="hover:underline">Restaurantes</Link>
          <Link href="/lugares" className="hover:underline">Lugares</Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="mb-4">
          <Image src="/latinosyeyy.webp" alt="Descripción de la imagen" width={300} height={200} />
        </div>
        <h1 className="text-4xl font-bold text-center">
          Bienvenidos a la Comunidad Latina en Estocolmo
        </h1>

        <p className="mt-6 text-xl text-center">
          Explora los mejores eventos, restaurantes y lugares para la comunidad latina.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link href="/eventos" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer">
            <div>
              <h2 className="text-2xl font-semibold">Eventos</h2>
              <p className="mt-2 text-center">Descubre los eventos latinos más emocionantes en Estocolmo.</p>
            </div>
          </Link>

          <Link href="/restaurantes" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer">
            <div>
              <h2 className="text-2xl font-semibold">Restaurantes</h2>
              <p className="mt-2 text-center">Saborea la auténtica cocina latina en los mejores restaurantes.</p>
            </div>
          </Link>

          <Link href="/lugares" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer">
            <div>
              <h2 className="text-2xl font-semibold">Lugares</h2>
              <p className="mt-2 text-center">Explora los lugares favoritos de la comunidad latina en Estocolmo.</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
