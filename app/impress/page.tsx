import Image from "next/image";
import Link from "next/link";

export default function Impress() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
        <h1 className="font-medium text-primary text-5xl text-center mb-4">
          Imprint
        </h1>
        <div className="text-primary text-center">
          <p>Information in accordance with § 5 TMG</p>
          <p className="mt-4">
            <strong>Name and Address:</strong>
            <br />
            Moritz Wright
            <br />
            Dolziger Straße 26
            <br />
            10247 Berlin
            <br />
            Germany
          </p>
          <p className="mt-4">
            <strong>Contact:</strong>
            <br />
            Email: info@pawbungalow.com
            <br />
            Phone: +49 (0)157 388 311 79
          </p>
          <p className="mt-4">
            <strong>
              Responsible for content in accordance with § 55 Abs. 2 RStV:
            </strong>
            <br />
            Moritz Wright
            <br />
            Address as above
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="text-primary text-lg underline absolute bottom-8 right-8"
      >
        Back
      </Link>
    </main>
  );
}
