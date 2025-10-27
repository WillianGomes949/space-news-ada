import Header from "@/components/Header";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Header />
      <div className="container mx-auto w-full flex flex-col items-center justify-between p-4 mt-8 gap-4">
        <Image
          src="/123.png"
          alt="Imagem da Notícia"
          width={800}
          height={600}
          className="object-cover rounded-xl"
        />
        <div className="mt-4 md:max-w-3/4">
          <h1 className="text-3xl font-bold text-start">Título da Notícia</h1>
          <p className="text-xl text-justify text-gray-700 dark:text-gray-400">
            noticia Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore illum rem, quo hic exercitationem quae beatae sed, totam
            similique, magni architecto nobis perspiciatis! Repudiandae
            dignissimos aspernatur deleniti, iure fuga aliquid. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Incidunt iusto minus
            maiores beatae, velit quisquam amet alias dignissimos iure illum
            odio ea consequatur quia est repellat itaque voluptatum in nostrum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            harum ad voluptas modi repellendus ab, deleniti porro. Nobis,
            distinctio sunt, tenetur adipisci eveniet vel, quod repellendus
            eligendi provident quaerat eum.
          </p>
        </div>
      </div>
    </>
  );
}
