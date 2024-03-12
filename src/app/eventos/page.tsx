// pages/eventos.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Eventos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventos - Comunidad Latina en Estocolmo</title>
        <meta name="description" content="Eventos de la comunidad latina en Estocolmo incluyendo misas y clubes nocturnos." />
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

      <main className="p-4">
        <h1 className="text-4xl font-bold text-center mb-4">Eventos</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Misión Católica de Hispanohablantes - Estocolmo</h2>
          <div className="flex justify-center mb-4">
            {/* Add as many images as you need in the slideshow */}
            <Image src="/stockholmcathedral.jpg" alt="Misión Católica" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">
          Eucaristías
            Todos los domingos Domkyrkan (Catedral). ,14:00 h. Folkungagatan 46B, T-bana Medborgardplatsen.
            
            Martes y viernes: 18: 30 h. Capilla Misión Hispana, Skånegatan 65. Se realiza la oración con las
          CONFESIONES
           Todos los domingos a partir de las 13: 00 h, en la Catedral, (Domkyrkan), hasta las 14: 00 h, y después de las 15: 00 h. 
          </p>
          <Link href="https://www.facebook.com/p/Misi%C3%B3n-Cat%C3%B3lica-de-Hispanohablantes-Estocolmo-100067648434616/?paipv=0&eav=AfZ7flbn3J04QjB5WZGymqp_30r7BN9X0AM5mmB3o7IDpq-aqlKqXEGvgNeqcBHybdA&_rdr" className="text-blue-600 hover:underline">
            Facebook: Misión Católica de Hispanohablantes - Estocolmo
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Kristal Night Club</h2>
          <div className="flex justify-center mb-4">
            {/* Add as many images as you need in the slideshow */}
            <Image src="/kristal.jpg" alt="Kristal" width={600} height={400} />
          </div>
          <p className="text-lg mb-4">Horario: martes a jueves 3–11 p.m., viernes 3 p.m.–3 a.m., sábado 12 p.m.–3 a.m.</p>
          <Link href="https://www.facebook.com/kristallstockholm/?locale=es_LA" className="text-blue-600 hover:underline">
            Facebook: Kristall - Stockholm
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Grupo de Facebook para Eventos Latinos</h2>
          <Link href="https://www.facebook.com/groups/215763625214050/?locale=es_LA" className="text-blue-600 hover:underline">
            Grupo de Facebook para más información
          </Link>
        </section>
      </main>
    </>
  );
};

export default Eventos;
