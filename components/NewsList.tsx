import NewsArticle from "./NewsArticle";

export default function NewsList() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-between p-4 mt-8 gap-4">
      <NewsArticle />
    </section>
  );
}
