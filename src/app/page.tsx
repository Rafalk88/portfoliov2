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
        <section className="grid grid-cols-[65%,35%] mt-40 space-x-6">
          <article className="w-full pt-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-700">Cześć! 👋</h2>
            <p className="mb-2 font-bold">Jestem programistą z ponad rocznym, praktycznym doświadczeniem</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Moja pasja do kodowania napędza mnie do nieustannego doskonalenia się i poszukiwania innowacyjnych rozwiązań.</li>
              <li>Zdobyte umiejętności techniczne oraz praktyczne doświadczenie pozwalają mi efektywnie współpracować w zespołach projektowych, przyczyniając się do sukcesu każdego wyzwania, przed jakim staje.</li>
              <li>Szukam nowych możliwości rozwoju, gdzie będę mógł wykorzystać moje umiejętności i pasję do programowania.</li>
            </ul>
          </article>
          <article className="w-full space-y-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <a 
                    className="w-28 p-2 flex items-center border rounded-md border-gray-200 shadow-sm cursor-pointer"
                    href="https://github.com/rafalk88"
                    target="_blank"
                  >
                    <span className="font-bold text-gray-800">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    className="w-28 p-2 flex items-center border rounded-md border-gray-200 shadow-sm cursor-pointer"
                    href="https://www.linkedin.com/in/rafalkochanecki/"
                    target="_blank"
                  >
                    <span className="font-bold text-gray-800">Linkedin</span>
                  </a>
                </li>
                <li>
                  <a
                    className="w-28 p-2 flex items-center border rounded-md border-gray-200 shadow-sm cursor-pointer"
                    href=""
                    target="_blank"
                  >
                    <span className="font-bold text-gray-800">CV</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>(+48) 533 605 496</p>
              <p>rafal.kochanecki@gmail.com</p>
            </div>
            <p>Katowice, Polska</p>
          </article>
        </section>
      </main>
    </section>
  );
}
