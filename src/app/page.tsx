// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Contenedor principal con grid y fondo */}
      <div
        className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 font-sans 
                   bg-[url('/portada.png')] bg-cover bg-center"
      >
        {/* Encabezado con navegación */}
        <header className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mi Portfolio</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/about">Sobre mí</Link>
              </li>
              <li>
                <Link href="/projects">Proyectos</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido principal */}
        <main className="flex flex-col items-center gap-8">
          <Image
            src="/moon.png"
            alt="Mi Foto"
            width={150}
            height={150}
            className="rounded-full shadow-[0px_10px_15px_rgba(0,0,0,0.75)] transform -translate-y-12 translate-x-12 cursor-pointer"
          />
          <h1
            className="font-bold"
            style={{
              color: "#ffdfdf",
              fontFamily: '"Comic Neue", sans-serif',
              fontSize: "65.5px",
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

        {/* Pie de página */}
        <footer className="w-full flex justify-center items-center mt-16 text-sm">
          <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        </footer>
      </div>

      {/* Imágenes animadas en posición absoluta */}
      <Image
        src="/imagen-izquierda.png"
        alt="Imagen izquierda"
        width={150}
        height={150}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 animate-slideInLeft cursor-pointer"
      />
      <Image
        src="/imagen-derecha.png"
        alt="Imagen derecha"
        width={150}
        height={150}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 animate-slideInRight cursor-pointer"
      />
      <Image
        src="/imagen-arriba.png"
        alt="Imagen desde arriba"
        width={150}
        height={150}
        className="absolute left-1/2 top-0 transform -translate-x-1/2 animate-slideDown cursor-pointer"
      />
    </div>
  );
}
