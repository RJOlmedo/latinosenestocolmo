// pages/restaurantes.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Restaurantes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Restaurantes - Comunidad Latina en Estocolmo</title>
        <meta name="description" content="Descubre los mejores restaurantes para la comunidad latina en Estocolmo." />
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
        <h1 className="text-4xl font-bold text-center mb-4">Restaurantes</h1>

        {/* Example Restaurant Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">La Neta</h2>
          <div className="flex justify-center mb-4">
            <Image src="/laneta.jpg" alt="La Neta" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Comida mexicana, de los mejores tacos que vas a probar en Estocolmo y es de dueños de Monterrey Mexico. Multiples ubicaciones,alrededor de la ciudad.
          </p>
          <Link href="https://laneta.se/" className="text-blue-600 hover:underline">
            Visitar sitio web
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">La Neta Bar</h2>
          <div className="flex justify-center mb-4">
            <Image src="/lanetabar.jpeg" alt="La Neta" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Mismo menu de tacos como en La Neta pero este cuenta con un bar con excelentes bebidas alcohilicas que puedes probar y ademas aguas mexicanas deliciosas.
          </p>
          <Link href="https://laneta.se/" className="text-blue-600 hover:underline">
            Visitar sitio web
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Salta Pizza</h2>
          <div className="flex justify-center mb-4">
            <Image src="/saltapizza.jpg" alt="Salta Pizza" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Pizzas porteñas y deliciosas empanadas salteñas, comida argentina deliciosa, un lugar diferente de pizzas con el estilo de la patagonia.
          </p>
          <Link href="https://saltapizza.se/" className="text-blue-600 hover:underline">
            Visitar sitio web
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Checa</h2>
          <div className="flex justify-center mb-4">
            <Image src="/checa.jpg" alt="Checa" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
            Comida y cocteles peruanos, tal y como si estuvieras alla
          </p>
          <Link href="https://www.checa.se/" className="text-blue-600 hover:underline">
            Visitar sitio web
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Paladar de Cuba</h2>
          <div className="flex justify-center mb-4">
            <Image src="/paladar.jpg" alt="Paladar" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
          Paladar de Cuba en Estocolmo sirve deliciosa comida cubana caribeña y tiene la gama de ron más grande de Suecia: una variedad que contiene más de 400 variedades Ron.
          </p>
          <Link href="https://www.paladar.se/" className="text-blue-600 hover:underline">
            Visitar sitio web
          </Link>
        </section>

        {/* Duplicate the section for more restaurants */}
        
      </main>
    </>
  );
};

export default Restaurantes;
