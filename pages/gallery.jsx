import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import sm from "../sm.json";
import { PhotoCard } from "./components/PhotoCard";

import * as prismic from "@prismicio/client";

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

  // async function fetchImageCollectionSlugsByCategory() {
  //   // 1. Fetch the collection filtering by category
  //   // 2. Return the slugs in objects
  //   // 3. Fetch the image slugs for each object
  //   // 4. Update images state with the new images

  //   // 1.
  //   let imageCollection;
  //   if (category == "all") {
  //     imageCollection = await client.queries.galleryConnection();
  //     console.log("Collection d'image sans filtre", imageCollection);
  //   } else {
  //     imageCollection = await client.queries.galleryConnection({
  //       filter: { category: { eq: category } },
  //     });
  //     console.log("Collection d'image avec filtre", imageCollection);
  //   }
  //   const imageSlugsPromise = imageCollection.data.galleryConnection.edges.map(
  //     (post) => {
  //       return { slug: post.node._sys.basename };
  //     }
  //   );
  //   if (imageSlugsPromise.length == 0) {
  //     return;
  //   }
  //   console.log("Slug objects : ", imageSlugsPromise);
  //   let imagesSlugs = [];
  //   imageSlugsPromise.map((slugObject) => {
  //     imagesSlugs.push(slugObject.slug);
  //     console.log("Adding this slug ton the array : ", slugObject.slug);
  //   });
  //   console.log("Entire Array", imagesSlugs);

  //   let imagesSlugsArray = [];
  //   imagesSlugs.map(async (slug) => {
  //     imagesSlugsArray.push(
  //       (await client.queries.gallery({ relativePath: slug })).data.gallery
  //         .image
  //     );
  //   });
  //   console.log("Final relative paths : ", imagesSlugsArray);
  //   tempImagesArray = imagesSlugsArray;
  // }

  // const handleOnCategoryChange = async (e) => {
  //   setCategory(e.target.value);
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetchImageCollectionSlugsByCategory(category);
  //     console.log("TempImagesArray", tempImagesArray);
  //     setImages(tempImagesArray);
  //   }
  //   fetchData();
  // });

  const HandleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterDocumentsByCategory(e.target.value);
  };

  return (
    <div className="flex flex-col h-full bg-[#E0E2DB]">
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
      <section className="flex-1 grid grid-flow-row mb-0 xl:grid-cols-3 bg-[#F2FFF8] md:grid-cols-2 grid-cols-1 m-3 p-3 overflow-y-scroll">
        {images.map((imageURL, idx) => {
          return (
            <div key={idx}>
              <Image
                src={imageURL}
                alt=""
                width={600}
                height={600}
                objectFit="contain"
              />
            </div>
          );
        })}
      </section>
    </div>
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
