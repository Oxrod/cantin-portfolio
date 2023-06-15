import Image from "next/image";
import { useEffect, useState } from "react";
import sm from "../sm.json";

import * as prismic from "@prismicio/client";
import Head from "next/head";

const Gallery = ({ documents }) => {
  const [category, setCategory] = useState("Tout");
  const [images, setImages] = useState([]);

  const filterDocumentsByCategory = (category) => {};

  useEffect(() => {
    function filterDocumentsByCategory() {
      let imageUrls = [];
      documents.map((document) => {
        if (document.data.category == category || category == "Tout") {
          imageUrls.push(document.data.image_source.url);
        }
      });
      setImages(imageUrls);
    }
    filterDocumentsByCategory();
  }, [category, documents]);

  const HandleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterDocumentsByCategory(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Galerie</title>
      </Head>
      <div className="flex flex-col h-full w-full bg-[#E0E2DB]">
        <h1 className="p-3 font-medium text-3xl">Toutes mes photos</h1>
        <div className="flex">
          <p className="mx-3">Catégorie : </p>
          <select onChange={HandleCategoryChange}>
            <option value="Tout" defaultChecked>
              Tout
            </option>
            <option value="Mariage">Mariage</option>
            <option value="Grossesse">Grossesse</option>
            <option value="Famille">Famille</option>
            <option value="Baptême">Baptême</option>
            <option value="Couple">Couple</option>
            <option value="Bébé">Bébé</option>
          </select>
        </div>
        <section className="flex-1 grid grid-flow-row gap-10 mb-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-[#F2FFF8] m-3 p-3 overflow-y-auto">
          {images.map((imageURL, idx) => {
            return (
              <div key={idx}>
                <Image
                  src={imageURL}
                  alt=""
                  width={600}
                  height={600}
                  objectFit="cover"
                />
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Gallery;

export const getStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const documents = await client.getAllByType("image");

  return {
    props: {
      documents,
    },
  };
};
