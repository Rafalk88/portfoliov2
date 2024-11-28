import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-rows-[180px_minmax(0,1fr)] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="">
        <Image
          className="h-[180px] object-cover"
          src="/assets/space.jpg"
          alt="space_image"
          width={1920}
          height={180}
        />
      </header>
      <main className="relative max-w-[75%] xl:max-w-[50%] w-full h-full">
        <figure className="absolute top-[-10%]">
          <Image
            className="rounded-full w-28 h-28 mb-4"
            src="/assets/avatar.webp"
            alt="Zdjęcie profilowe Rafał Kochanecki"
            width={112}
            height={112}
          />
          <figcaption>
            <h2 className="text-5xl font-bold">Rafał Kochanecki</h2>
            <h3 className="font-bold text-gray-500">Frontend developer</h3>
          </figcaption>
        </figure>
        <section className="grid grid-cols-[65%,35%] mt-40">
          <article className="w-full">
            <h2 className="mb-4 text-2xl font-bold text-gray-700">Cześć! 👋</h2>
            <p className="mb-2 font-bold">Jestem programistą z ponad rocznym, praktycznym doświadczeniem</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Moja pasja do kodowania napędza mnie do nieustannego doskonalenia się i poszukiwania innowacyjnych rozwiązań.</li>
              <li>Zdobyte umiejętności techniczne oraz praktyczne doświadczenie pozwalają mi efektywnie współpracować w zespołach projektowych, przyczyniając się do sukcesu każdego wyzwania, przed jakim staje.</li>
              <li>Szukam nowych możliwości rozwoju, gdzie będę mógł wykorzystać moje umiejętności i pasję do programowania.</li>
            </ul>
          </article>
          <article className="w-full">2</article>
        </section>
      </main>
    </section>
  );
}
