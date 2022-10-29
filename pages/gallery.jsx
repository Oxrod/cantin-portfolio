import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/images/icon.jpg";
import { PhotoCard } from "./components/PhotoCard";

export default function Gallery() {
  const [category, setCategory] = useState("all");

  function importAll(r) {
    return r.keys().map(r);
  }

  const allImages = importAll(
    require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
  );

  // C'est un outil magique qui nous servira pour plus tard
  // useEffect(() => {}, [category]);

  const cards = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
        {cards.map((card) => {
          return (
            <div
              key={card}
              className=" relative m-3 h-80 bg-center rounded-full cursor-pointer hover:scale-105 hover:transition-all pb-[56,25%]"
            >
              <Link href="/">
                <Image
                  src={allImages[1]}
                  alt="alt"
                  sizes="100%"
                  layout="fill"
                  objectFit="cover"
                />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
