import Image from "next/image";

export const PhotoCard = (source) => {
  return (
    <div className="h-full relative">
      <Image src={source} sizes="100%" alt="cardImage" layout="fill"></Image>
    </div>
  );
};
