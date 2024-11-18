import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center relative font-primary bg-secondary">
      <Image src="/logo.svg" alt="Logo" width={300} height={300} />
      <div className="grid gap-4">
        <h1 className="font-medium text-primary text-5xl text-center">
          Paw Bungalow
        </h1>
        <p className="font-medium text-primary text-xl text-center">
          We&apos;ll be back soon...
        </p>
      </div>
      <Link
        href="/impress"
        className="text-primary text-lg underline absolute bottom-8 right-8"
      >
        Imprint
      </Link>
    </main>
  );
}
