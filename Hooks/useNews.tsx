'use client'
import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  summary: string;
  published_at: string;
  news_site: string;
}

export default function useNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/');
        // A API retorna um objeto com propriedade "results" que contém o array de artigos
        setNews(response.data.results);
        console.log('Dados recebidos:', response.data.results); // Para debug
      } catch (error: any) {
        setError(error.message);
        console.error('Erro ao buscar notícias:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { news, loading, error };
}