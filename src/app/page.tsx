// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
          className="rounded-full"
        />
        <h2 className="text-2xl">¡B I E N V E N I D O!</h2>
        <p className="text-center max-w-xl">
          E N J O Y  THE  J O U R N E Y
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition"
          >
            Contacto
          </Link>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="w-full flex justify-center items-center mt-8 text-sm">
        <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
