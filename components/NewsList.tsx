"use client";
import useNews from "@/Hooks/useNews";
import Image from "next/image";

export default function NewsList() {
  const { news, loading, error } = useNews();

  // Skeleton Loading
  if (loading)
    return (
      <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8 gap-4">
        <article className="w-full">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="mt-2 md:flex gap-4 mb-8 pb-4 border-b border-gray-300 dark:border-gray-700"
            >
              {/* Skeleton da imagem */}
              <div className="w-full md:w-1/3 h-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>

              <div className="flex flex-col justify-between mt-4 md:mt-0 md:w-2/3">
                <div className="flex flex-col items-start justify-top gap-3">
                  {/* Skeleton do título */}
                  <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>

                  {/* Skeleton do texto */}
                  <div className="space-y-2 w-full">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
                  </div>

                  {/* Skeleton da fonte */}
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                </div>

                {/* Skeleton do link */}
                <div className="mt-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    );

  if (error)
    return (
      <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8">
        <div className="text-red-500">Erro: {error}</div>
      </section>
    );
  // Verifica se news existe e é um array
  if (!news || news.length === 0)
    return (
      <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8">
        <div>Nenhuma notícia encontrada.</div>
      </section>
    );

  return (
    <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8 gap-4">
      <article className="w-full">
        {news.map((article) => (
          <div
            key={article.id}
            className="mt-2 md:flex gap-4 mb-8 pb-4 border-b border-gray-300 dark:border-gray-700"
          >
            {/* Imagem com fallback */}
            <img
             
              src={article.image_url}
              alt={article.title}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
              }}
            />
            <div className="flex flex-col justify-between mt-4 md:mt-0 md:w-2/3">
              <div className="flex flex-col items-start justify-top gap-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-400 text-base">
                  {article.summary}
                </p>
                {article.news_site && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Fonte: {article.news_site}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Leia mais
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
