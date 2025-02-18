// app/page.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

      </Head>

      <div
        className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 font-sans 
                   bg-[url('/portada.png')] bg-cover bg-center"
      >
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">...</h1>
          <nav>
            <ul className="flex gap-4">
              <ul className="flex gap-4">
                <li className="three-d-effect inline-block">
                  <Link href="/about">Sobre mí</Link>
                </li>
                <li className="three-d-effect inline-block">
                  <Link href="/projects">Proyectos</Link>
                </li>
                <li className="three-d-effect inline-block">
                  <Link href="/contact">Contacto</Link>
                </li>
              </ul>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center gap-8">
          <h1
            className="font-bold"
            style={{
              color: "#ffdfdf",
              fontFamily: '"Comic Neue", sans-serif',
              fontSize: "80px",
              textShadow: "8px 8px 12px rgba(0, 0, 0, 0.85)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
            }}
          >
            <div className="leading-[0.9]">
              <div className="text-left">Enjoy</div>
              <div className="text-center">the</div>
              <div className="text-right">Journey</div>
            </div>
          </h1>
        </main>

        <footer
          className="w-full flex justify-center items-center mt-16 text-sm"
          style={{ fontFamily: '"Alumni Sans Pinstripe", sans-serif' }}
        >
          <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        </footer>
      </div>

      {/* Imagen que sale desde arriba */}
      <Image
        src="/moon.png"
        alt="Imagen desde arriba"
        width={180}
        height={180}
        className="absolute left-1/2 top-0 rounded-full transform -translate-x-1/2 animate-slideDown cursor-pointer shadow-[0px_15px_25px_rgba(0,0,0,0.85)]"
      />

      {/* Imagen en la izquierda */}
      <Image
        src="/imagen-izquierda.png"
        alt="Imagen izquierda"
        width={300}
        height={300}
        className="absolute left-0 top-[10%] transform -translate-y-1/2 opacity-70 animate-slideInLeft cursor-pointer"
      />

      {/* Imagen en la derecha */}
      <Image
        src="/imagen-derecha.png"
        alt="Imagen derecha"
        width={200}
        height={200}
        className="absolute right-0 top-[50%] transform -translate-y-1/2 opacity-60 animate-slideInRight cursor-pointer"
      />
    </div>
  );
}
