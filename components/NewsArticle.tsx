import Image from "next/image";
import Link from "next/link";

export default function NewsArticle() {
  return (
    <article>
      <div className="mt-2 md:flex gap-4">
        <Image
          src="/123.png"
          alt="Imagem da Notícia"
          width={250}
          height={150}
          className="object-cover rounded-md"
        />
        <div className="flex flex-col justify-between mt-4 md:mt-0">
          <div className="flex flex-col items-start justify-top gap-3">
            <h2 className="text-2xl font-bold">Título da Notícia</h2>
            <p className="text-gray-700 dark:text-gray-400 text-base">
              Breve descrição da notícia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <Link
              href="/news"
              className="focus-within:shadow-lg visited:text-green-600 hover:text-blue-500"
            >
              Leia mais
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 dark:border-gray-700 mt-4 "></div>
    </article>
  );
}
