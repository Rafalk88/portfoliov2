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
            <h3 className="text-4xl font-bold">Rafał Kochanecki</h3>
            <h4 className="font-bold text-gray-500">Frontend developer</h4>
          </figcaption>
        </figure>
      </main>
    </section>
  );
}
