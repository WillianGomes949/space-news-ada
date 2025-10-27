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
  authors: {
    name: string,
    social: null;
  };
}

export default function useNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/');
        setNews(response.data.results);
        // console.log('Dados recebidos:', response.data.results); 
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        setError(errorMessage);
        console.error('Erro ao buscar notícias:', errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { news, loading, error };
}