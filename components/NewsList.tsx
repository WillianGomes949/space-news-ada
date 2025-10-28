"use client";
import useNews from "@/Hooks/useNews";
import { useEffect, useState } from "react";
export default function NewsList() {
  const { news, loading, error } = useNews();
  const [visitedLinks, setVisitedLinks] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("visitedNews");
      if (saved) {
        try {
          const savedArray = JSON.parse(saved);
          setVisitedLinks(new Set(savedArray));
        } catch (error) {
          console.error("Erro ao carregar links visitados:", error);
        }
      }
      setIsInitialized(true); 
    }
  }, []);

  const handleLinkClick = (url: string) => {
    const newVisited = new Set(visitedLinks);
    newVisited.add(url);
    setVisitedLinks(newVisited);

    if (typeof window !== "undefined") {
      localStorage.setItem("visitedNews", JSON.stringify([...newVisited]));
    }
  };

  if (loading || !isInitialized)
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
 
  if (!news || news.length === 0)
    return (
      <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8">
        <div>Nenhuma notícia encontrada.</div>
      </section>
    );
  
  return (
    <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8 gap-4">
      <article className="w-full">
        {news.map((article) => {
          const isVisited = visitedLinks.has(article.url);
          return (
            <div
              key={article.id}
              className="mt-2 md:flex gap-4 mb-8 pb-4 border-b border-gray-300 dark:border-gray-700"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-lg"
              />
              {/* eslint-enable-next-line @next/next/no-img-element */}
              <div className="flex flex-col justify-between mt-4 md:mt-0 md:w-2/3">
                <div className="flex flex-col items-start justify-top gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400 text-base">
                    {article.summary}
                  </p>
                  <div className="w-full flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Fonte: {article.news_site}</p>
                    <p>
                      Publicado em:
                      {new Date(article.published_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkClick(article.url)}
                    className={`${
                      isVisited
                        ? "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                        : "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    }`}
                  >
                    {isVisited ? "Visited" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
