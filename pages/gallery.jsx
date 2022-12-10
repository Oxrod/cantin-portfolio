import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImagesByCategory } from "./api/category";
import { PhotoCard } from "./components/PhotoCard";

export const Gallery = ({ babyImages }) => {
  const [category, setCategory] = useState("all");

  function importAll(r) {
    return r.keys().map(r);
  }

  const allImages = importAll(
    require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
  );

  // C'est un outil magique qui nous servira pour plus tard
  // useEffect(() => {}, [category]);

  return (
    <div className="flex flex-col h-full bg-[#E0E2DB]">
      <h1 className="p-3 font-medium text-3xl">Toutes mes photos</h1>
      <div className="flex">
        <p className="mx-3">Catégorie : </p>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all" defaultChecked>
            Tout
          </option>
          <option value="wedding">Mariage</option>
          <option value="pregnancy">Grossesse</option>
          <option value="family">Famille</option>
          <option value="baptism">Baptême</option>
          <option value="couple">Couple</option>
        </select>
      </div>
      <section className="flex-1 grid grid-flow-row mb-0 xl:grid-cols-3 bg-[#F2FFF8] md:grid-cols-2 grid-cols-1 m-3 p-3 overflow-y-scroll">
        {babyImages.map((image, imageIndex) => {
          console.log(image);
          return (
            <div
              key={imageIndex}
              className=" relative m-3 h-80 bg-center rounded-full cursor-pointer hover:scale-105 hover:transition-all pb-[56,25%]"
            >
              <Image
                src={`/assets/gallery${image}`}
                alt="alt"
                sizes="100%"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Gallery;

export async function getStaticProps() {
  const babyImages = getImagesByCategory("Bébé");
  return { props: { babyImages } };
}
