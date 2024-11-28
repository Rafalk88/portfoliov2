import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[180px_minmax(0,1fr)] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="">
        <Image
          className="h-[180px] object-cover"
          src="/assets/space.jpg"
          alt="space_image"
          width={1920}
          height={180}
        />
      </header>
      <main className="">
        footer
      </main>
    </div>
  );
}
