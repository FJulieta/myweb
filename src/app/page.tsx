// app/page.tsx
import Head from "next/head";
import SplineHome from "./components/SplineHome";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Mi Portfolio</title>
      </Head>
      <SplineHome />
      {/* Aquí puedes agregar el resto del contenido de la página */}
    </div>
  );
}
