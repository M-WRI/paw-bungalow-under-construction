import Image from "next/image";
import Link from "next/link";

export default function Impress() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        <h1 className="font-medium text-primary text-5xl text-center mb-4">
          Impressum
        </h1>
        <div className="text-primary text-center">
          <p>Angaben gemäß § 5 TMG</p>
          <p className="mt-4">
            <strong>Name und Anschrift:</strong>
            <br />
            Moritz Wright
            <br />
            Dolziger Straße 26
            <br />
            10247 Berlin
            <br />
            Deutschland
          </p>
          <p className="mt-4">
            <strong>Kontakt:</strong>
            <br />
            E-Mail: info@pawbungalow.com
            <br />
            Telefon: +49 (0)157 388 311 79
          </p>
          <p className="mt-4">
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </strong>
            <br />
            Moritz Wright
            <br />
            Adresse wie oben
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="text-primary text-lg underline absolute bottom-8 right-8"
      >
        Zurück
      </Link>
    </main>
  );
}
